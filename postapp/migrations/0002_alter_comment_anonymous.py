# Generated by Django 4.0.5 on 2023-02-19 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('postapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='anonymous',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
