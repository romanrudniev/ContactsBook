from django import forms
from models import Contact

class ContactsForm (forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['first_name','last_name','phone_number','email','photo','country_of_birth']

