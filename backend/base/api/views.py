from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from modelosApi.models import User
from Usuario.models import Usuarios

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class Serializar_Token(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        #panguano
        query = list(Usuarios.objects.filter(user_id=user.id).values())
        #Nuevos clains para el token
        token['username'] = user.username
        token['name'] = query[0]['nombre']
        token['role'] = query[0]['role']

        return token

class Juju(TokenObtainPairView):
    serializer_class = Serializar_Token

@api_view(['GET'])
def getRoutes(request):
    routes = [ 'api/token', 'api/token/refresh']
    return Response(routes)
