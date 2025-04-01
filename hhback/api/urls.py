from django.urls import path
from .views import get_companies, create_company, company_detail

urlpatterns = [
    path('companies/', get_companies, name='get_companies'),
    path('companies/create/', create_company, name='create_company'),
    path('companies/<int:pk>', company_detail, name='company_detail')
]