import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    {
      icon: 'code',
      title: 'Web & App Development',
      description:
        'We build high-performance websites, web applications, and mobile apps tailored to your business needs. From landing pages to complex SaaS platforms, our team delivers clean, scalable code using modern frameworks like Angular, React, and Flutter.',
      features: ['Custom Web Applications', 'Progressive Web Apps (PWA)', 'Mobile App Development', 'E-commerce Solutions', 'API Design & Integration'],
    },
    {
      icon: 'cloud',
      title: 'Cloud & DevOps',
      description:
        'Accelerate your delivery pipeline and reduce infrastructure costs. We architect and manage cloud environments on AWS, GCP, and Azure, implement CI/CD, and containerize workloads with Docker and Kubernetes.',
      features: ['Cloud Architecture (AWS/GCP/Azure)', 'CI/CD Pipeline Setup', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Observability'],
    },
    {
      icon: 'lightbulb',
      title: 'IT Consulting',
      description:
        'Strategic technology guidance to help you make better decisions. Whether you are scaling a startup or modernizing an enterprise, our consultants provide clear, actionable roadmaps aligned with your goals.',
      features: ['Digital Transformation Strategy', 'Technology Audits', 'Architecture Reviews', 'Vendor Selection', 'Cost Optimization'],
    },
    {
      icon: 'shield',
      title: 'Cybersecurity',
      description:
        'Protect your business from evolving threats. Our security experts conduct thorough vulnerability assessments, penetration testing, and compliance reviews to ensure your systems and data remain safe.',
      features: ['Penetration Testing', 'Security Audits', 'Compliance (ISO 27001, GDPR)', 'Incident Response', 'Security Training'],
    },
    {
      icon: 'database',
      title: 'Database Administration',
      description:
        'Reliable, high-performance data storage is the backbone of every great product. We design, optimize, migrate, and maintain databases across relational and NoSQL systems — ensuring your data is always fast, safe, and available.',
      features: ['Database Design & Architecture', 'Performance Tuning & Optimization', 'Migration & Modernization', 'Backup & Disaster Recovery', 'PostgreSQL, MySQL, MongoDB, Redis'],
    },
    {
      icon: 'palette',
      title: 'UI/UX Design',
      description:
        'Great software starts with great design. Our designers create intuitive, accessible, and visually compelling interfaces — from initial wireframes and user research through to pixel-perfect, developer-ready prototypes.',
      features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Figma & Responsive Design'],
    },
    {
      icon: 'chart',
      title: 'Data Analytics & Business Intelligence',
      description:
        'Stop guessing — start knowing. We build end-to-end data pipelines, analytics platforms, and BI dashboards that turn your raw data into clear, actionable intelligence so you can make faster, smarter decisions.',
      features: ['Data Pipeline Engineering', 'Dashboard & Reporting (Power BI, Looker)', 'Predictive Analytics', 'Data Warehouse Design', 'KPI Strategy & Visualization'],
    },
    {
      icon: 'check',
      title: 'QA & Software Testing',
      description:
        'Ship with confidence. Our QA engineers embed into your development cycle to catch issues early — combining manual exploratory testing with automated regression suites to ensure every release meets the highest quality bar.',
      features: ['Manual & Exploratory Testing', 'Test Automation (Playwright, Cypress)', 'API & Performance Testing', 'CI/CD Quality Gates', 'Bug Triage & Reporting'],
    },
  ];
}
