import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  values = [
    {
      icon: 'star',
      title: 'Excellence',
      description: 'We hold ourselves to high standards in every line of code and every client interaction.',
    },
    {
      icon: 'users',
      title: 'Partnership',
      description: 'We embed with your team as true partners — aligned with your goals, not just your ticket queue.',
    },
    {
      icon: 'globe',
      title: 'Global Thinking',
      description: 'Our team thinks globally by default — international standards, cross-cultural communication, and a borderless delivery model.',
    },
    {
      icon: 'refresh',
      title: 'Continuous Growth',
      description: "Technology evolves fast. We invest in staying ahead so our clients always have access to what's next.",
    },
  ];

  team = [
    { name: 'Saugat Pandey', role: 'Founder/CEO', description: 'Bachelor\'s in Computer Science and Master\'s in Information Technology from USA with over 5+ years of experience developing enterprise-level software.' },
  ];

  capabilities = [
    'Full-stack product engineering',
    'Cloud-native architecture',
    'Data & analytics platforms',
    'Security & compliance',
    'UX-driven design',
    'QA & quality engineering',
  ];
}
