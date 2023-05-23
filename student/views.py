from django.http import HttpResponse
from django.template import loader

def AddStudent(request):
  template = loader.get_template('AddStudent.html')
  return HttpResponse(template.render())

def index(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())

def login(request):
  template = loader.get_template('login.html')
  return HttpResponse(template.render())

def AboutUs(request):
  template = loader.get_template('AboutUs.html')
  return HttpResponse(template.render())

def DashBoard(request):
  template = loader.get_template('DashBoard.html')
  return HttpResponse(template.render())

def EditStudent(request):
  template = loader.get_template('EditStudent.html')
  return HttpResponse(template.render())

def home(request):
  template = loader.get_template('home.html')
  return HttpResponse(template.render())

def In_AcitveStudent(request):
  template = loader.get_template('In_AcitveStudent.html')
  return HttpResponse(template.render())

def RegisterNewAdmin(request):
  template = loader.get_template('RegisterNewAdmin.html')
  return HttpResponse(template.render())