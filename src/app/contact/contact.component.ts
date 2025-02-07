import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

contentObj = {
  title: "Contact",
  form: {
    name: {label: "Full Name", placeholder: "Full Name"},
    email: {label: "E-mail", placeholder: "Email Address"},
    phone: {label: "Contact Phone", placeholder: "Phone Number"},
    message: {label: "Comment", placeholder: "Message..."},
    button: "Send",
    successmessage: "Your message was sent successfully!",
    errormessage: "Something went wrong, please try again"
  },
  contacts: {
    title: "Get in touch",
    text: "Quisque varius congue arcu, vitae convallis purus accumsan in. Etiam eu lacus sed nunc iaculis commodo vel et lacus. Sed dictum orci lectus, sed euismod ligula scelerisque quis. Cras arcu leo, maximus vel iaculis at, viverra elementum libero.",
    links : [
      {title: "info@blabla.mk", link: "mailto:info@blabla.mk"},
      {title: "(389) 3222-111", link: "tel:+3893222111"},
    ],
    address: "Blvd. Partizanski Odredi 62 Skopje 1000, Macedonia"
  }
}

constructor(private readonly contactService: ContactService){

}

showSuccessMessage = false;
showSuccessMessageError = false;

contactObj: any = {
  fullName: "",
  email: "",
  phone: "",
  message: ""
}

onSend(){
  const formValue = this.contactObj;

  this.contactService.submitForm(formValue).then((res)=>{
    debugger;
    if(res){
      this.showSuccessMessage = true;
    }else{
      this.showSuccessMessageError = true;
    }
  }).catch(()=>{
    this.showSuccessMessageError = true;
  })
}
}
