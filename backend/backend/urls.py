from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('login/', include('base.api.urls')),
    #path('auth_login/', include('allauth.urls')),
    path('api/', include('modelosApi.routers')),
    path('', include('Usuario.router')),
    path('', include('Contrato.routers')),
    path('', include('Factura.routers')),
    path('', include('Tarjetas.router'))
]
