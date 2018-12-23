from django.shortcuts import render
from django.http import HttpResponse, Http404
from wokanda.core.models import Nominee, Category
import json
from django.contrib import messages
from django.shortcuts import redirect

# Create your views here.
def home(request):
    return render(request, "index.html", {
        "title": "Wokanda Awards",
        "selected": "index"
    })

def about(request):
    return render(request, "about.html", {
        "title": "Wokanda Awards - About",
        "selected": "about"
    })

def chunks(l, n):
        for i in range(0, len(l), n):
            yield l[i:i + n]

def category(request):
    selected_category = Category.objects.get(name="Movies")
    selected_nominees = Nominee.objects.filter(category=selected_category, year_made__gte=1990, year_made__lte=1999)
    nominees_chunked = list(chunks(selected_nominees, 3))
    return render(request, "category.html", {
        "title": "Wokanda Awards - Categories",
        "selected": "category",
        "nominee_list": nominees_chunked
    })


def query_nominees(request):
    category = request.GET.get('category', None)
    decade_start = request.GET.get('decade', None)
    decade_end = str(int(decade_start) + 10)
    if category is None or decade_start is None:
        nominees = []
    else:
        category = Category.objects.get(name=category)
        nominees = Nominee.objects.filter(category = category, year_made__gte=decade_start, year_made__lte=decade_end)
        nominees =  list(chunks(nominees, 3))

    return render(request, "nominee_component.html",{ "nominee_list": nominees})

def nominate(request):
    return render(request, "nominate.html", {
        "title": "Wokanda Awards - Nominate",
        "selected": "nominate"
    })

def vote_nominee(request, id):
    nominee = Nominee.objects.get(id=id)
    nominee.votes = nominee.votes + 1
    nominee.save()
    return render(request, "success.html", {
        "title": "Wokanda Awards - Voted"
    })


def success(request):
    messages.add_message(request, messages.INFO, 'Thank you!')
    if request.method == "POST":
        info = request.POST
        category = info.get("CATEGORY")
        year = info.get("Year Created")
        title = info.get("Title")
        comments = info.get("Comments")
        creator = info.get("Creator")
        if year is None or title is None or comments is None or creator is None:
            messages.add_message(request, messages.INFO, 'All fields are required! Please fill out.')
            redirect("/nominate")
    return render(request, "success.html", {
        "title": "Wokanda Awards -- Success"
    })


def nominee(request, id):
    nominee = Nominee.objects.get(id=id)
    if nominee is None:
        raise Http404
    return render(request, "nominee.html", { "nominee": nominee })