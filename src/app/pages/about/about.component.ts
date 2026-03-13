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
    { name: 'Saurab Gautam', role: 'Founder & CEO', initials: 'SG' },
    { name: 'Team Member', role: 'Lead Developer', initials: 'TM' },
    { name: 'Team Member', role: 'Cloud Architect', initials: 'TM' },
    { name: 'Team Member', role: 'Security Analyst', initials: 'TM' },
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
