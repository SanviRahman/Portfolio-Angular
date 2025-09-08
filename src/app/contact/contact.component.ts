import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Message sent successfully!');
      form.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
