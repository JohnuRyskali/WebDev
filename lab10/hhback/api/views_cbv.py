from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Vacancy
from .serializers import VacancyPlainSerializer

class VacancyListCreate(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancyPlainSerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancyPlainSerializer(data=request.data)
        if serializer.is_valid():
            vacancy = serializer.save()
            return Response(VacancyPlainSerializer(vacancy).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
