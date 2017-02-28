from loan.models import Loan
from rest_framework import serializers

class LoanSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Loan
        fields = ('pk', 'mortgageNumber', 'fileCloseDate', 'created')