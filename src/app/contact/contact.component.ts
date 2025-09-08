import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showPopup = false;
  popupMessage = '';
  popupType: 'success' | 'error' = 'success';

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.popupType = 'success';
      this.popupMessage = '✅ Message sent successfully!';
      this.showPopup = true;
      form.reset();
    } else {
      this.popupType = 'error';
      this.popupMessage = '❌ Form is invalid. Please check again.';
      this.showPopup = true;
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}
