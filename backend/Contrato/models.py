from django.db import models
from django.utils import timezone

class Contrato(models.Model):
    id_contrato = models.BigAutoField(primary_key=True)
    id_cliente = models.ForeignKey('Usuario.Usuarios', on_delete=models.CASCADE)
    fecha_vinculación = models.DateField(auto_now=True)
    estado_contrato = models.CharField(max_length=20, default='activo', blank=False)
    ciudad = models.CharField(max_length=30, default='Cali', blank=False)
    departamento = models.CharField(max_length=50, default='Valle del cauca') #Fila nueva debido a problemas con el street map ....
    direccion = models.CharField(max_length=40, null=False, blank=False)
    estrato = models.CharField(max_length=10, null=False, blank=False)
    uso = models.CharField(max_length=20, default='Domestico', blank=False)

    class Meta:
        db_table = "Contrato"
    
    def __str__(self):
        return str(self.id_contrato)
