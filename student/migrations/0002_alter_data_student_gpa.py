# Generated by Django 4.2.1 on 2023-05-23 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data_student',
            name='GPA',
            field=models.CharField(max_length=255),
        ),
    ]
