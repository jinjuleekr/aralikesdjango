# Generated by Django 2.1.7 on 2019-04-16 03:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='member',
            name='type',
        ),
        migrations.AddField(
            model_name='member',
            name='service_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='member',
            name='email',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='member',
            name='id',
            field=models.CharField(max_length=255),
        ),
    ]
