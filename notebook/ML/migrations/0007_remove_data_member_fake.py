# Generated by Django 2.2 on 2019-05-02 16:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ML', '0006_data_member_fake'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='data',
            name='member_fake',
        ),
    ]
