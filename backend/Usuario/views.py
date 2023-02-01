from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action, api_view
from rest_framework import status
from Contrato.serializers import ContratoSerializer, MyContractSerializer
from .serializers import *
from .models import Usuarios


class UsuariosViewSet(ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuarioSerializer

    '''
     @Get: Se realizacon la url http://localhost:8000/usuarios/

     @Get <pk>: permite hacer una consulta solo con la primary key del modelo, esto a traves de 
        http://localhost:8000/usuarios/<pk>/ , donde <pk> se reemplaza por el numero

     @Post: se hace a la ruta http://localhost:8000/usuarios/ mandando como json:
        {
            user_id 
            nombre
            apellido
            role
            identificacion
            direccion
            ciudad
            barrio
            telefono
            email
            password
            re_password
        }

     @Put: Para la actualización necesita todos los campos anteriores del JSON y en la url necesita la <pk>
           del campo que quiere actualizar http://localhost:8000/usuarios/<pk>/, cambiando el algunas de las key 
           del JSON el valor a actualizar

     @Delete: El más dificil, sfrom rest_framework.parsers import JSONParserolo colocar en la url la pk del campo a eliminar y listo 
              http://localhost:8000/usuarios/<pk>/

     NOTA: debido a las limitaciones que trae esta bendición voy a hacer unos cambios necesarios para que 
     podamos hacer cosas más avanzadas, entre otras
    '''


    @action(methods=['get'], detail=False, url_path='role')
    def filter_role(self, request):
        """
        Metodo para filtrar los usuarios por roles
        http: GET
        url endpoint: http://localhost:8000/usuarios/role/
        JSON: {'role': '<any role>'}
        """
        
        role_serializer = RoleSerializerFilter(data= request.data)
        role_serializer.is_valid(raise_exception=True)

        usuarios_filter = Usuarios.objects.filter(role=role_serializer.data['role'])
        usuario_serializer = UsuarioSerializer(usuarios_filter, many=True)

        return Response(usuario_serializer.data)        


    def create(self, request, *args, **kwargs):
        """
        Metodo del end-point para la creación de un usuario
        url: http://localhost:8000/usuarios/
        """
        user_serializer = self.get_serializer(data=request.data)
        if user_serializer.is_valid():
            auth_serializer = Auth_UserSerializer(data=request.data, context=user_serializer.data)
            auth_serializer.is_valid(raise_exception=True)
            auth_serializer.save()
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response({"message": "Se ha realizado el registro"})


        #Forest code: ​32KB3KUSG

    @action(methods=['get'], detail=True, url_path='mis-contratos')
    def get_contratos(self, request, pk=None):
        user_obj = Usuarios.objects.get(pk=pk)
        contrato_srlzer = MyContractSerializer(user_obj.contrato_set.all(), many=True)
        return Response(contrato_srlzer.data)

    @action(methods=['get'], detail=False, url_path='auth_info')
    def get_user_state(self, request):
        user_query = User.objects.all()
        user_serializer = State_Serializer(user_query, many=True)
        return Response(user_serializer.data)


    @action(methods=['get'], detail=False, url_path='user_info')
    def get_all_users_info(self, request):
        raw_sql = '''
            SELECT * FROM Usuarios JOIN auth_user ON Usuarios.user_id = auth_user.id
        '''

        users = Usuarios.objects.raw(raw_sql)
        user_serializer = User_Info_Serializer(users, many=True)
        
        return Response(user_serializer.data)

    
    @action(methods=['put'], detail=True, url_path='change_state')
    def change_state_user(self, request, pk=None):
        if pk==None:
            raise Response({'message': 'Se necesita una pk'})
        
        state = ActiveSerializer(data=request.data)
        state.is_valid(raise_exception=True)
        User.objects.filter(pk=pk).update(is_active=state.data['is_active'])
        return Response({"message": "Se ha actualizado la contraseña"})


    @action(methods=['put'], detail=True, url_path='admin_change_password')
    def change_pswrd_admin(self, request, pk=None):
        """
        Metodo para cambiar la contraseña del usuario, solo para el ADMINISTRADOR
        body request: {"password": "new_password", "re_password": "new_password"}
        url: http://localhost:8000/usuarios/<pk>/admin_change_password/

        password ->id:3, Geider -> univalle
        """
        user_query = get_object_or_404(User, id=pk)
        password_serializer = Auth_UserSerializer(data=request.data)
        password_serializer.is_valid(raise_exception=True)

        user_query.set_password(password_serializer.data['password'])
        user_query.save()

        return Response({"message": "Se ha cambiado la contraseña"})

    @action(methods=['put'], detail=False, url_path='user_change_password')
    def change_pswrd_user(self, request):
        """
        Metodo para combio de contraseña por parte del USUARIO
        body request: {"username": "email",
                    "auth_password": "old_password", 
                    "new_password": "new_password",
                    "re_password": "new_password"}
        url: http://localhost:8000/usuarios/user_change_password/
        """
        #Comprobación de información request
        user_serializer = NewPswrUserSerializer(data=request.data)
        user_serializer.is_valid(raise_exception=True)

        #Comprobación de autenticación
        auth_user = authenticate(username=user_serializer.data['username'], 
                                password=user_serializer.data['auth_password'])

        #Credenciales incorrectas
        if auth_user is None:
            return Response({"message": "Credenciales incorrectas"}, status=status.HTTP_401_UNAUTHORIZED)

        #Proceso de cambio de contraseña
        auth_user.set_password(user_serializer.data['new_password'])
        auth_user.save()

        return Response({"message": "Se ha cambiado la contraseña"})


## ******* Otro enfoque de las views ****** ##
## *******  No Utilizar user_state   ****** ##
@api_view()
def user_state(request, pk):
    sql = '''SELECT * FROM Usuarios JOIN auth_user ON Usuarios.user_id = auth_user.id WHERE Usuarios.user_id = {} '''
    usuario = Usuarios.objects.raw(sql.format(pk))
    user_serializer = User_Info_Serializer(usuario, many=True)

    if user_serializer.data == []:
        return Response({'message': 'el usuario no se encuentra registrado'}, status=status.HTTP_204_NO_CONTENT)

    return Response(user_serializer.data)

@api_view(['DELETE'])
def delete_user(request, pk):
    """
    Metodo para la eliminación de un usuario a partir de su pk o id
    url:: http://localhost:8000/delete_user/<pk>/
    Errors:
        * No existe la pk en la tabla -> status: 404 Not Found
    """
    if request.method == 'DELETE':
        #Se realiza la busqueda de los usuarios
        auth_user = get_object_or_404(User, id=pk)
        usuario = get_object_or_404(Usuarios, user_id=pk)

        #Se procede a realizar la eliminación
        auth_user.delete()
        usuario.delete()

        return Response({'message': 'Se ha eliminado el usuario'})

  
#Endpoint para cambiar contraseña
#minuto 55:27
        