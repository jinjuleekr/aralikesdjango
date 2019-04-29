from django.views.generic.base import TemplateView
from django.apps import apps
# import json, requests

#-- TemplateView
class HomeView(TemplateView) :
    template_name = 'home.html'

class HomeView2(TemplateView) :
    template_name = 'home_empty.html'

    def get_context_data(self, **kwargs) :
        context = super().get_context_data(**kwargs)
        #context['app_list'] = ['app1_ara', ]
        # dictVerbose = {}
        # for app in apps.get_app_configs() :
        #     if 'site-packages' not in app.path :
        #         dictVerbose[app.label] = app.verbose_name
        # context['verbose_dict'] = dictVerbose
        context['testData'] = [1,1,1,1,1]
        return context