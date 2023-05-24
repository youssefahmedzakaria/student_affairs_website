from django.http import HttpResponse, HttpResponseRedirect,  JsonResponse
from django.template import loader
from django.urls import reverse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
<<<<<<< Updated upstream
from student.models import Data_Student
# Add Student
=======
from .models import Data_Student


from .models import AdminsData
import json
from django.shortcuts import render, redirect
from django.contrib import messages

##### Add Student
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    template = loader.get_template('index.html')
    return HttpResponse(template.render())


def login(request):
    template = loader.get_template('login.html')
    return HttpResponse(template.render())

=======
  template = loader.get_template('index.html')
  return HttpResponse(template.render())
def login(request):
    return render(request, 'login.html')
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    context = {
        'stds_data': stds_data,
    }

    # template = loader.get_template('In_AcitveStudent.html')
    return render(request, 'In_AcitveStudent.html', context)
=======
def RegisterNewAdmin(request):
  return render(request, 'RegisterNewAdmin.html', context={'csrf_token': request.COOKIES['csrftoken']})


def validate_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        try:
            admin = AdminsData.objects.get(email=email, password=password)
            return JsonResponse({'valid': True})
        except AdminsData.DoesNotExist:
            return JsonResponse({'valid': False})

    return JsonResponse({'message': 'Invalid request method.'})


def register_new_admin(request):
    if request.method == 'POST':
        first_name = request.POST['firstname']
        last_name = request.POST['lastname']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['Conpassword']

        if password != confirm_password:
            return render(request, 'RegisterNewAdmin.html', {'error': 'Passwords do not match'})

        admin_exists = AdminsData.objects.filter(email=email).exists()
        if admin_exists:
            return render(request, 'RegisterNewAdmin.html', {'error': 'Admin with this email already exists'})

        admin = AdminsData(first_name=first_name, last_name=last_name, username=username, email=email, password=password)
        admin.save()
>>>>>>> Stashed changes

        messages.success(request, 'Registered successfully!')
        
        return redirect('RegisterNewAdmin')  

<<<<<<< Updated upstream
def RegisterNewAdmin(request):
    template = loader.get_template('RegisterNewAdmin.html')
    return HttpResponse(template.render())
=======
    return render(request, 'RegisterNewAdmin.html')
>>>>>>> Stashed changes
