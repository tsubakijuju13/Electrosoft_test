from django.db import models

class Usuarios(models.Model):

    user_id = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100, null=False)
    apellido  = models.CharField(max_length=100, null=False)
    role = models.CharField(max_length=100, default='cliente', null=False)
    identificacion = models.CharField(max_length=100, unique=True, null=False)
    direccion = models.TextField(max_length=100, null=False, blank=False)
    ciudad = models.CharField(max_length=100, default='Cali')
    barrio = models.CharField(max_length=100, null=False, blank=False)
    telefono = models.CharField(max_length=100, default='0000000000')
    email = models.EmailField(max_length=100, unique=True, null=False, blank=False)

    def __str__(self):
        return str(self.user_id)

    class Meta:
        db_table = "Usuarios"


class Ju(models.Model):
    name = models.CharField(max_length=20, blank=False)

    class Meta:
        db_table = "Ju"

    def __str__(self):
        return self.name