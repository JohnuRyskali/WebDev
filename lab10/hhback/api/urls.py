from django.urls import path
from . import views_fbv, views_cbv

urlpatterns = [
    path('companies/', views_fbv.company_list),
    path('companies/<int:pk>/', views_fbv.company_detail),
    path('vacancies/', views_cbv.VacancyListCreate.as_view()), 
]