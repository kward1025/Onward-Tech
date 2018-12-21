from django.shortcuts import render
from django.http import HttpResponse
from wokanda.core.models import Nominee, Category
import json
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

    return render("nominee_component.html",{ "nominee_list": nominees})

def nominate(request):
    return render(request, "nominate.html", {
        "title": "Wokanda Awards - Nominate",
        "selected": "nominate"
    })