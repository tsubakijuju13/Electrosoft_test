from django.urls import path
from .views import ViewUser
from .routers import router

urlpatterns = [
    path('users/', ViewUser.as_view(), name='user_lista'),
    path('users/<int:id>', ViewUser.as_view(), name='get_from_param'),
]

urlpatterns += router.urls