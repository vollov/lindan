from django.contrib import admin

from models import Loan

class LoanAdmin(admin.ModelAdmin):
    list_display = ['mortgageNumber', 'fileCloseDate', 'created']
    
admin.site.register(Loan, LoanAdmin)
