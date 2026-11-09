import { services } from './services';

export const homeHero = {
  eyebrow: 'Independent Engineering & Technology Advisory',
  titleLines: ['Engineering Intelligence.', 'Practical Impact.'],
  text: 'Advanced engineering, intelligent technologies and technical advisory for complex industrial systems.',
  supporting:
    'Integrae connects deep technical understanding with practical execution, helping organizations solve engineering challenges, evaluate emerging technologies and turn innovation into industrial value.',
  primaryCta: { label: 'Explore Our Services', href: '/services/' },
  secondaryCta: { label: 'Discuss Your Challenge', href: '/contact/' },
};

export const homeIntro = {
  heading: 'Complex problems demand integrated thinking.',
  paragraphs: [
    'Modern engineering challenges rarely fit within a single discipline.',
    'Mechanical systems interact with software, automation, materials, data and operational constraints. Effective solutions require understanding not only individual components, but also how complete systems behave.',
    'Integrae brings these disciplines together through a combination of scientific analysis, systems thinking and practical engineering judgement.',
  ],
};

export const homeServices = {
  eyebrow: 'What We Do',
  heading: 'Our Expertise',
  cards: services.map((service) => ({
    id: service.id,
    title: service.shortTitle,
    summary: service.summary,
    icon: service.icon,
    href: `/services/#${service.id}`,
  })),
};

export const homeApproach = {
  heading: 'From Insight to Implementation.',
  steps: [
    {
      number: '01',
      title: 'Understand',
      description: 'Define the technical challenge, context, constraints and desired outcomes.',
    },
    {
      number: '02',
      title: 'Architect',
      description: 'Develop a coherent system-level approach and evaluate alternatives.',
    },
    {
      number: '03',
      title: 'Validate',
      description:
        'Apply modelling, analysis, experimentation and engineering judgement to reduce uncertainty.',
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Support implementation, technical decision-making and transfer of knowledge.',
    },
  ],
};

export const homeIndustries = {
  heading: 'Experience Across Industries',
  note: 'These sectors reflect the founder’s professional background and Integrae’s relevant advisory expertise.',
  items: [
    'Energy & Hydrogen',
    'Advanced Manufacturing',
    'Automotive & Electrified Mobility',
    'Industrial Automation',
    'Biotechnology & Regulated Systems',
    'Research & Deep Technology',
  ],
};

export const homeClosing = {
  heading: 'Bring Us Your Complex Engineering Challenge.',
  copy: 'Whether you are evaluating a new technology, developing a complex product or strengthening an engineering organization, Integrae can help connect technical depth with practical progress.',
  cta: { label: 'Contact Integrae', href: '/contact/' },
};
