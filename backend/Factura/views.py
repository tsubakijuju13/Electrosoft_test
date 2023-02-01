from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from .models import *
from .serializers import *

class FacturaView(ModelViewSet):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

    @action(methods=['get'], detail=True, url_path="contrato")
    def filter_bill_by_contract(self, request, pk=None):
        """
        Función para realizar busqueda de las facturas con contrato
        url:: http://localhost:8000/factura/<id_contrato>/
        """
        factura_query = Factura.objects.filter(codigo_contrato=pk).order_by('-fecha_expedicion').all()
        contrato_srlzer = self.get_serializer(factura_query, many=True)

        return Response(contrato_srlzer.data)
