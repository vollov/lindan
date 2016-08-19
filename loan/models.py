from __future__ import unicode_literals

from django.db import models

class Loan(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    mortgageNumber = models.CharField(max_length=100, blank=True, default='')
    fileCloseDate = models.DateTimeField()
    
    class Meta:
        ordering = ('created',)
