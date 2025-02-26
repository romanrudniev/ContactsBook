from django.shortcuts import render, redirect, get_object_or_404
from .models import Contact
from .forms import ContactsForm

# Create your views here.
def contact_list(request):
    contacts = Contact.objects.all()
    return render(request, 'contact_list.html', {'contacts': contacts})


def add_contact(request):
    if request.method == 'POST':  # Виправлено
        form = ContactsForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('contact_list')
    else:
        form = ContactsForm()
    return render(request, 'contact_form.html', {'form': form})  # Виправлено відступ


def edit_contact(request, contact_id):
    contact = get_object_or_404(Contact, id=contact_id)
    if request.method == "POST":
        form = ContactsForm(request.POST, request.FILES, instance=contact)  # Виправлено
        if form.is_valid():
            form.save()
            return redirect('contact_list')
    else:
        form = ContactsForm(instance=contact)  # Виправлено

    return render(request, 'contact_form.html', {'form': form, 'contact': contact})
