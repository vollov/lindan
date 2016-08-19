from django.shortcuts import render

from loan.models import Loan
from rest_framework import viewsets
from loan.serializers import LoanSerializer

class LoanViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Loan.objects.all().order_by('-created')
    serializer_class = LoanSerializer
