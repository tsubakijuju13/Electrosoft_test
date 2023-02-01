from pyexpat import model
from django.db import models
from Usuario.models import Usuarios
from django.core.exceptions import ValidationError

def validar_numero_tarjeta(v):
    if len(v) < 12:
        raise ValidationError('%(v)s no es un numero de tarjeta valido, muy corto')

class Tarjetas(models.Model):
    id_tarjeta = models.BigAutoField(primary_key=True)
    numero_tarjeta = models.CharField(max_length=16, validators=[validar_numero_tarjeta], null=False, unique=True)
    fecha_vencimiento = models.CharField(max_length=4, null=False, blank=False)
    cvv = models.CharField(null=False, blank=False, max_length=3)
    tipo = models.CharField(null=False, blank=False, max_length=10)

    class Meta:
        db_table = "Tarjetas"
    
    def __str__(self):
        return '%d %s' % (self.id_tarjeta, self.numero_tarjeta)


class Tarjeta_debito(models.Model):
    num_tarjeta = models.ForeignKey('Tarjetas', unique=True, on_delete=models.CASCADE)
    saldo = models.FloatField(blank=False, null=False)

    class Meta:
        db_table = "Tarjeta_debito"

    def __str__(self):
        return '%s %f' % (self.num_tarjeta, self.saldo)


class Tarjeta_credito(models.Model):
    num_tarjeta = models.ForeignKey('Tarjetas', unique=True, on_delete=models.CASCADE)
    cupo = models.FloatField(blank=False, null=False)

    class Meta:
        db_table = "Tarjeta_credito"

    def __str__(self):
        return '%s %f' % (self.num_tarjeta, self.cupo)

class MiTarjeta(models.Model):
    cliente = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    tarjeta = models.ForeignKey('Tarjetas', unique=True, on_delete=models.CASCADE)

    class Meta:
        db_table = "MiTarjeta"

    def __str__(self):
        return self.tarjeta