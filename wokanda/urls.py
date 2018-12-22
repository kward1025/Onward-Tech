"""wokanda URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from wokanda.core import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('about', views.about),
    path('category', views.category),
    path('nominate', views.nominate),
    path('query_nominees', views.query_nominees),
    path('nominee/<int:id>', views.nominee),
    #path('success/', views.success),
    path('vote/<int:id>', views.vote_nominee),
    path('', views.home ),
]
