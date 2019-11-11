from rest_framework.routers import DefaultRouter
from .api import PatientViewSet, InsuranceViewSet, AppointmentViewSet, ReportViewSet

router = DefaultRouter()
router.register('patient', PatientViewSet, 'patients')
router.register('insurance', InsuranceViewSet, 'insurance')
router.register('appointment', AppointmentViewSet, 'appointment')
router.register('report', ReportViewSet, 'report')
urlpatterns = router.urls
