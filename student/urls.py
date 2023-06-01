from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='Index'),
    path('home', views.home, name='Home'),
    path('home.html', views.home , name ='Home'), #temporary solution
    path('about_us', views.AboutUs, name ='AboutUs'),
    path('add_student', views.AddStudent, name = 'AddStudent'),
    # path('dash_board', views.DashBoard , name ='DashBoard'),
    path('edit_student', views.EditStudent, name ='EditStudent'),
    path('in_acitve_student', views.In_AcitveStudent, name ='In_AcitveStudent'),
    path('login',views.login , name ='Login'),
    path('RegisterNewAdmin', views.RegisterNewAdmin, name = 'RegisterNewAdmin'),
    path('addStudent/', views.AddStudent_record, name='AddStudent_record'),
    
    
    path('validate_login/', views.validate_login, name='validate_login'),
    path('register_new_admin/', views.register_new_admin, name='register_new_admin'),

    path('dash_board/', views.dashboard_view, name='dashboard'),
    path('search_students/', views.search_students, name='search_students'),
    path('add_student', views.AddStudent, name = 'AddStudent'),

    path('deleteStudent/<int:id>', views.delete, name = 'Delete'),
]