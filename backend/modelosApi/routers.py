from rest_framework.routers import DefaultRouter, SimpleRouter
from .views import *

router = DefaultRouter()
router.register(r'usuarios', UserModelViewSet, basename="usuarios_basename")
router.register(r'administrador', AdminView)

#Lo mismo que el arreglo de las rutas, solo que lo invoco aquí:
urlpatterns = router.urls