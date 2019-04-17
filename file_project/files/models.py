from django.db import models
from django import forms
from django.utils import timezone
import os
from uuid import uuid4 # universally unique identifiers : 타임스템프를 기준으로 고유한 번호 지정

# def get_file_path(instance, filename):
#     ext = filename.split('.')[-1]
#     filename = "%s.%s" %(uuid4(), ext)
#     return os.path.join('uploads/', filename)

def get_file_path(instance, filename):
    upload_to = 'img'
    ext = filename.split('.')[-1]
    # get filename
    if instance.pk:
        filename = '{}.{}'.format(instance.id, ext)
    else:
        # set filename as random string
        filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join(upload_to, filename)

class Data(models.Model):
    username_date = models.CharField(max_length=255)
    data = models.ImageField(upload_to=get_file_path,
                            null=False,
                            verbose_name=('imgs'),
                            blank=False,)
    upload_time = models.DateTimeField(auto_now_add = True)
# django.utils.timezone
class DataModelForm(forms.ModelForm):
    class Meta: 
        model = Data
        fields = ['data'] # 'username_date', 
        labels = { # 'username_date': '유저이름과 업로드 날짜',
                    'data':'이미지'
        }