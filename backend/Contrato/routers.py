from rest_framework.routers import SimpleRouter
from .views import ContratoView

router = SimpleRouter()
router.register(r'contrato', ContratoView)

urlpatterns = router.urls