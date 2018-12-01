from django.shortcuts import render
from wokanda.core.models import Nominee, Category
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

def category(request):
    def chunks(l, n):
        for i in range(0, len(l), n):
            yield l[i:i + n]
    
    selected_category = Category.objects.get(name="Film")
    selected_nominees = Nominee.objects.filter(category=selected_category, year_made__gte=1990, year_made__lte=1999)
    nominees_chunked = list(chunks(selected_nominees, 3))
    return render(request, "category.html", {
        "title": "Wokanda Awards - Categories",
        "selected": "category",
        "nominee_list": nominees_chunked
    })

def nominate(request):
    return render(request, "nominate.html", {
        "title": "Wokanda Awards - Nominate",
        "selected": "nominate"
    })