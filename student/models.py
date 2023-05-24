from django.db import models

class Data_Student(models.Model):
    StuID = models.IntegerField()
    StuName = models.CharField(max_length=255)
    DOB = models.DateField()
    GPA = models.CharField(max_length=255)
    Gender = models.CharField(max_length=255)
    level = models.IntegerField()
    Status = models.CharField(max_length=255)
    Department = models.CharField(max_length=255)
    Email = models.CharField(max_length=255)
    Mobile = models.IntegerField()
    Nationality = models.CharField(max_length=255)
    NationalityID = models.IntegerField(null = True)


    def __str__(self):
        return self.StuName
    
    
class AdminsData(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    
    def __str__(self):
        return self.username