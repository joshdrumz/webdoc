from rest_framework import viewsets, permissions
from .serializers import PatientSerializer, InsuranceSerializer, AppointmentSerializer, ReportSerializer
from .models import Patient, Insurance, Appointment, Report

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PatientSerializer


class InsuranceViewSet(viewsets.ModelViewSet):
    queryset = Insurance.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InsuranceSerializer


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AppointmentSerializer


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ReportSerializer

