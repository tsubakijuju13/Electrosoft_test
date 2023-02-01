from rest_framework.routers import SimpleRouter
from django.urls import path
from .views import *

router = SimpleRouter()
router.register(r'usuarios', UsuariosViewSet)

urlpatterns = router.urls

#urlpatterns.append(path('user_state/<str:pk>/', user_state))
urlpatterns.append(path('delete_user/<str:pk>/', delete_user))