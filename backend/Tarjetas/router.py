from django.urls import URLPattern
from rest_framework.routers import SimpleRouter
from .views import TarjetaView

router = SimpleRouter()
router.register(r'tarjetas', TarjetaView)

urlpatterns = router.urls