from rest_framework import serializers
from .models import *

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factura
        fields = '__all__'

'''
class MyContractSerializer(serializers.ModelSerializer):
    """
    Clase para serializar los queryset de los contratos asociados a 
    un cliente.
    Devuelve solo cierta información relevante
    """
    class Meta:
        model = Contrato
        fields = ['id_contrato', 'fecha_vinculación', 'estado_contrato', 'ciudad', 'direccion']
'''