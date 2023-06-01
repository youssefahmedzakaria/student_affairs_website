from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.template import loader
from django.urls import reverse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from .models import Data_Student
from .models import TeamData
from .models import AdminsData
import json
from django.shortcuts import render, redirect
from django.contrib import messages
import json


# Add Student

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
                           Department=department, Email=email, Mobile=mobile, Nationality=nationality,
                           NationalityID=nationalID)
    Student.save()
    return HttpResponseRedirect(reverse('dashboard'))


############################################################


def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())


def login(request):
    return render(request, 'login.html')


def AboutUs(request):
    teamData = TeamData.objects.all()
    context ={
        'members' : teamData,
    }
    return render(request, 'AboutUs.html', context)

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

        admin = AdminsData(first_name=first_name, last_name=last_name, username=username, email=email,
                           password=password)
        admin.save()

        messages.success(request, 'Registered successfully!')

        return redirect('RegisterNewAdmin')


def dashboard_view(request):
    students = Data_Student.objects.all()
    return render(request, 'DashBoard.html', {'students': students})


def search_students(request):
    search_id = request.GET.get('search_id')
    search_name = request.GET.get('search_name')

    students = Data_Student.objects.all()
    if search_id:
        students = students.filter(StuID=search_id)
    if search_name:
        students = students.filter(StuName__icontains=search_name)

    student_list = []
    for student in students:
        student_list.append({
            'id': student.StuID,
            'name': student.StuName,
            'dob': student.DOB,
            'gpa': student.GPA,
            'gender': student.Gender,
            'level': student.level,
            'status': student.Status,
            'department': student.Department,
            'email': student.Email,
            'mobile': student.Mobile,
            'nationality': student.Nationality,
            'national_id': student.NationalityID,
        })

    return JsonResponse({'students': student_list})


def delete(request, id):
    student = Data_Student.objects.get(id = id)
    student.delete()
    return HttpResponseRedirect(reverse('dashboard'))


def edit(request, id):
    student = Data_Student.objects.get(id = id)
    template = loader.get_template('EditStudent.html')
    context = {
        'student' : student,
    }
    return HttpResponse(template.render(context , request))


def update(request, id):
    Student = Data_Student(id= id,StuID="", StuName="", DOB="", GPA="", Gender="", level="", Status="",
                           Department="", Email="", Mobile="", Nationality="",
                           NationalityID="")
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
    Student = Data_Student(id= id,StuID=StId, StuName=stdname, DOB=date, GPA=gpa, Gender=gender, level=level, Status=status,
                           Department=department, Email=email, Mobile=mobile, Nationality=nationality,
                           NationalityID=nationalID)
    Student.save()
    return HttpResponseRedirect(reverse('dashboard'))