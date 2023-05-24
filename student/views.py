from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from student.models import Data_Student
# Add Student
############################################################


def AddStudent(request):
    template = loader.get_template('AddStudent.html')
    return HttpResponse(template.render({}, request))


@csrf_exempt
def AddStudent_record(request):
    StId = request.POST['studentId']
    stdname = request.POST['name']
    date = request.POST['date']
    gpa = request.POST['gpa']
    ############################
    RadioG = request.POST.get('gender')
    if RadioG == 'Male':
        gender = 'Male'
    else:
        gender = 'Female'
    ############################
    level = request.POST['level']
    ############################
    RadioS = request.POST.get('status')
    if RadioS == 'Active':
        status = 'Active'
    else:
        status = 'Inactive'
    ############################
    department = request.POST['department']
    email = request.POST['email']
    mobile = request.POST['mobile']
    nationality = request.POST['Nationality']
    nationalID = request.POST['National ID']
    Student = Data_Student(StuID=StId, StuName=stdname, DOB=date, GPA=gpa, Gender=gender, level=level, Status=status,
                           Department=department, Email=email, Mobile=mobile, Nationality=nationality, NationalityID=nationalID)
    Student.save()
    return HttpResponseRedirect(reverse('DashBoard'))
############################################################


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
    stds_data = Data_Student.objects.all()

    context = {
        'stds_data': stds_data,
    }

    # template = loader.get_template('In_AcitveStudent.html')
    return render(request, 'In_AcitveStudent.html', context)


def RegisterNewAdmin(request):
    template = loader.get_template('RegisterNewAdmin.html')
    return HttpResponse(template.render())
