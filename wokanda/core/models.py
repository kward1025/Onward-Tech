from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"Category:{self.name}"


# Create your models here.
class Nominee(models.Model):
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    photo = models.ImageField(null=True)
    title = models.CharField(max_length=300)
    creator = models.CharField(max_length=300, null=True)
    year_made = models.IntegerField()
    reason_for_nomination = models.TextField(blank=True, null=True, default=None)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return f"Nominee:{self.title}-{self.year_made} - {self.category.name}"
    
    def to_json(self):
        return {
            "photo": self.photo.url,
            "title": self.title,
            "year_made": self.year_made
        }

