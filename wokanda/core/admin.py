from django.contrib import admin
from .models import Category, Nominee
# Register your models here.
admin.site.register(Category)

@admin.register(Nominee)
class NomineeAdmin(admin.ModelAdmin):
    def get_ordering(self, request):
        return ['category', 'year_made']
        
