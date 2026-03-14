import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_btw43e3';
const EMAILJS_TEMPLATE_ID = 'template_y7lg5k4';
const EMAILJS_PUBLIC_KEY = 'Pzrkit9jiT-R43e_7';

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
  error = signal('');

  async onSubmit() {
    this.submitting.set(true);
    this.error.set('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
          time: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
        },
        EMAILJS_PUBLIC_KEY
      );
      this.submitted.set(true);
    } catch {
      this.error.set('Something went wrong. Please try again or email us directly.');
    } finally {
      this.submitting.set(false);
    }
  }

  reset() {
    this.form = { name: '', email: '', subject: '', message: '' };
    this.submitted.set(false);
    this.error.set('');
  }
}
