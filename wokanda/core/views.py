from django.shortcuts import render

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
    return render(request, "category.html", {
        "title": "Wokanda Awards - Categories",
        "selected": "category"
    })

def nominate(request):
    return render(request, "nominate.html", {
        "title": "Wokanda Awards - Nominate",
        "selected": "nominate"
    })