from django.shortcuts import render
from .models import Contact

# Create your views here.
def contact_list(request):
    contacts = Contact.object.all()
    return render(request, 'app/contacts_list.html', {'contacts': contacts})
