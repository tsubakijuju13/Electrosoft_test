from django.urls import path
from . import views
from .views import Juju
from rest_framework_simplejwt.views import TokenRefreshView #TokenObtainPairView, ->Esta vista ha sido reemplazada por TokenViewUser

urlpatterns = [
    path('', views.getRoutes),
    path('token/', Juju.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    #path('mytoken/', views.TokenViewUser.as_view()), Puedo hacerlo así o simplemente utilizando la ruta token/

]