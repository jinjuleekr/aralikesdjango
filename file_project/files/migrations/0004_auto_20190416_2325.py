# Generated by Django 2.1.7 on 2019-04-16 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0003_data_upload_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='upload_time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
