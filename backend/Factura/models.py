from django.db import models
from datetime import datetime
from django.conf import settings
from django.core.mail import EmailMessage
from django.core.exceptions import ValidationError

def valid_cost_service(value):
    if value <= 0.0:
        raise ValidationError({"message": "El valor debe ser un numero positivo"})

def email_sender():
    '''
    Metodo para enviar un correo a un cliente asociado a una factura,
    al momento de crear una factura se dispara un trigger para formalizar el proceso
    '''

    mensage = EmailMessage(
        'Factura de Electricidad de la fecha: ' + str(datetime.now()),
        'A continuación se adjunta el recibo',
        "electuv@gmail.com",
        ['geideran808087@gmail.com']
    )
    # mensage.attach_file('/home/tsubaki_0x01/Pictures/electrosoft/backend/Factura/recibo.pdf')
    mensage.send()


class Factura(models.Model):
    no_factura = models.BigAutoField(primary_key=True)
    codigo_contrato = models.ForeignKey('Contrato.Contrato', on_delete=models.CASCADE)

    fecha_expedicion = models.DateField(auto_now_add=True)
    fecha_vencimiento = models.DateField(null=False, blank=False)
    estado = models.CharField(max_length=20, blank=False, default="En mora")

    consumo_energia = models.FloatField(null=True, blank=False)
    energia_lectura_actual = models.CharField(max_length=20, blank=False, null=True, default='0.0')
    #energia_lectura_anterior = models.CharField(max_length=20, blank=False, default='0.0')

    energia_valor_total = models.FloatField(validators=[valid_cost_service], null=True, blank=False)
    alumbrado_valor_total = models.FloatField(validators=[valid_cost_service], null=True, blank=False)

    valor_total = models.FloatField(null=True, blank=False)

    class Meta:
        db_table = "Factura"
    
    def __str__(self):
        return '%s %f' % (self.factura, self.pago_total)

    def save(self, *args, **kwargs):
        email_sender()
        return super(Factura, self).save(*args, **kwargs)
