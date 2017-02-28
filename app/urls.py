"""lindan URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from security.views import UserViewSet, GroupViewSet
from loan.views import LoanViewSet
from rest_framework import routers

from app.views import IndexView

#router = routers.DefaultRouter()
router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'loans', LoanViewSet)

urlpatterns = [
    
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1.0/auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1.0/', include(router.urls)),
    
    url(r'^((?!api).)*$', IndexView.as_view(), name='index'),
]
