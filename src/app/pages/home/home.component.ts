import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  services = [
    {
      icon: 'code',
      title: 'Web & App Development',
      description: 'Custom websites, web apps, and mobile applications built with modern frameworks — from MVPs to enterprise-scale platforms.',
    },
    {
      icon: 'cloud',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, CI/CD pipelines, and container orchestration with Docker & Kubernetes.',
    },
    {
      icon: 'chart',
      title: 'Data Analytics & BI',
      description: 'Turn raw data into business insight with dashboards, data pipelines, and intelligence reporting.',
    },
    {
      icon: 'shield',
      title: 'Cybersecurity',
      description: 'Penetration testing, security audits, and compliance consulting to keep your systems safe.',
    },
    {
      icon: 'palette',
      title: 'UI/UX Design',
      description: 'User-centered design that converts — wireframes, prototypes, and polished interfaces.',
    },
    {
      icon: 'database',
      title: 'Database Administration',
      description: 'Database architecture, optimization, migration, and ongoing management across SQL and NoSQL systems.',
    },
    {
      icon: 'lightbulb',
      title: 'IT Consulting',
      description: 'Technology strategy, architecture reviews, and digital transformation roadmaps for any scale.',
    },
    {
      icon: 'check',
      title: 'QA & Software Testing',
      description: 'Manual and automated testing, performance validation, and continuous quality assurance.',
    },
  ];

  stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '10+', label: 'Expert Team' },
  ];
}
