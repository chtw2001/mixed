# Generated by Django 3.2 on 2023-02-19 09:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0004_user_is_staff'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_staff',
        ),
    ]
