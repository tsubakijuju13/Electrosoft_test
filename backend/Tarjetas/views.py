from .models import *
from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from Factura.models import Factura
from Factura.serializers import FacturaSerializer
from .serializers import *


class TarjetaView(ModelViewSet):
    queryset = Tarjetas.objects.all()
    serializer_class = Tarjeta_serializer

    def create(self, request, *args, **kwargs):
        tarjeta_srlz = self.get_serializer(data=request.data)
        tarjeta_srlz.is_valid(raise_exception = True)
        tarjeta_srlz.save()

        instance = Tarjetas.objects.get(id_tarjeta=tarjeta_srlz.data['id_tarjeta'])

        if tarjeta_srlz.data['tipo'] == "Debito":
            Tarjeta_debito.objects.create(num_tarjeta = instance,
                                        saldo=request.data['saldo'])
        else:
            Tarjeta_credito.objects.create(num_tarjeta = instance, cupo=request.data['saldo'])

        return Response({"message": "Se ha creado la tarjeta"}, status=status.HTTP_201_CREATED)



    @action(methods=['post'], detail=False, url_path='registrar_tarjetas')
    def registrar_tarjetas(self, request):
        tarjeta = self.get_serializer(data=request.data)
        if tarjeta.is_valid():
            return Response("Este número de tarjeta esta incorrecto")

        #Busqueda de la tarjeta
        query = Tarjetas.objects.filter(numero_tarjeta=tarjeta.data['numero_tarjeta']).get()
        query_data = self.get_serializer(query).data

        if (query_data['cvv'] == tarjeta.data['cvv'] and 
            query_data['fecha_vencimiento'] == tarjeta.data['fecha_vencimiento']):

            cliente = Usuarios.objects.filter(identificacion=request.data['identificacion']).get()
            MiTarjeta.objects.create(cliente=cliente, tarjeta=query)
        else:
            return Response({"message": "Datos incorrectos"}, status=status.HTTP_401_UNAUTHORIZED)

        return Response({"message:": "Se ha registrado la targeta"})


    @action(methods=['post'], detail=False, url_path='pagar')
    def pagar(self,request):
        factura_query = Factura.objects.get(no_factura=request.data['factura'])
        factura = FacturaSerializer(factura_query).data
        #tarjeta = MisTarjetas_serializer(MiTarjeta.objects.filter(cliente=request.data['cliente'])).data    

        sql_query = '''SELECT * FROM Tarjetas JOIN MiTarjeta ON Tarjetas.id_tarjeta = MiTarjeta.tarjeta_id WHERE MiTarjeta.cliente_id = {}'''
        tarjeta = Tarjetas.objects.raw(sql_query.format(request.data['cliente']))
        tarjeta_srl = self.get_serializer(tarjeta, many=True).data

        if tarjeta_srl[0]["tipo"] == "Debito":
            debito_query = Tarjeta_debito.objects.filter(num_tarjeta=tarjeta_srl[0]['id_tarjeta']).get()
            debito = Debito_serializer(debito_query).data

            if debito['saldo'] - factura['valor_total'] >= 0:
                factura_query.estado = "Pagado"
                factura_query.save()

                debito_query.saldo -= factura['valor_total']
                debito_query.save()

                return Response({"message:": "Se ha realizado el pago con exito"}, status=status.HTTP_202_ACCEPTED)
            else:
                return Response({"message:": "No tienes suficiente dinero :3"}, status=status.HTTP_406_NOT_ACCEPTABLE)
            
        else:
            credito_query = Tarjeta_credito.objects.filter(num_tarjeta=tarjeta_srl[0]['id_tarjeta']).get()
            credito = Credito_serializer(credito_query).data

            if credito['cupo'] - factura['valor_total'] >= 0:
                factura_query.estado = "Pagado"
                factura_query.save()

                credito_query.saldo -= factura['valor_total']
                credito_query.save()

                return Response({"message:": "Se ha realizado el pago con exito"}, status=status.HTTP_202_ACCEPTED)
            else:
                return Response({"message:": "No tienes suficiente dinero :3"}, status=status.HTTP_406_NOT_ACCEPTABLE)


        
