export const site = {
  name: 'Integrae Engineering Ltd',
  shortName: 'Integrae',
  legalName: 'Integrae Engineering Ltd',
  tagline: 'Engineering Intelligence. Practical Impact.',
  secondaryProposition: 'From complex engineering problems to deployable technology.',
  description:
    'Independent engineering and technology advisory for complex industrial systems — systems engineering, simulation, industrial AI, materials, energy and technical leadership.',
  url: 'https://www.integrae.com.cy',
  email: 'info@integrae.com.cy',
  phone: '+357 97 491406',
  phoneHref: 'tel:+35797491406',
  location: 'Nicosia, Cyprus',
  linkedin: 'https://www.linkedin.com/company/integrae-engineering/',
  founder: {
    name: 'Esteban Darío Marks',
    title: 'Founder & Managing Director',
    credentials: 'Dr.Eng. (Dr.techn.)',
    experienceYears: '20+',
  },
  locale: 'en',
} as const;

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Training', href: '/training/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const footerNote =
  'Integrae Engineering Ltd is an independent engineering and technology consultancy based in Nicosia, Cyprus.';
