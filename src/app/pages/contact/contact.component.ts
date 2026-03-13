import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitted = signal(false);
  submitting = signal(false);

  async onSubmit() {
    this.submitting.set(true);
    // Simulate async submission — wire up to backend/email service later
    await new Promise((r) => setTimeout(r, 1200));
    this.submitting.set(false);
    this.submitted.set(true);
  }

  reset() {
    this.form = { name: '', email: '', subject: '', message: '' };
    this.submitted.set(false);
  }
}
