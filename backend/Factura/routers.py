from rest_framework.routers import SimpleRouter
from .views import FacturaView

router = SimpleRouter()
router.register(r'factura', FacturaView)

urlpatterns = router.urls