import email
from pyexpat import model
from statistics import mode
from django.db import models
#from django.contrib.auth.models import User

#Modelo de datos para el Usuario
class User(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    email = models.EmailField(max_length=50, null=False)
    password = models.CharField(max_length=20, null=False, blank=False)
    role = models.CharField(max_length=20, null=False)
    active = models.BooleanField(null=False)

    def __str__(self):
        return str(self.user_id)

    class Meta: #Leer https://docs.djangoproject.com/en/4.1/ref/models/options/ para más diversión
        db_table = "Users"
        #ordering = ['-user_id']  

#Modelo de datos para el Administrador
class Admin(models.Model):
    nombre = models.CharField(max_length=20, blank=False)
    apellido = models.CharField(max_length=20, blank=False)
    documento = models.TextField(max_length=20, blank=False, unique=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user_id)

    class Meta:
        db_table = "Admin"

