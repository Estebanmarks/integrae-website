export const trackRecordPage = {
  eyebrow: 'Track Record',
  title: 'Selected Engineering Experience',
  lead: 'Experience across research, complex systems and industrial technology development.',
  intro: [
    "Integrae Engineering Ltd draws on its founder's more than two decades of international experience in engineering research, multidisciplinary product development, simulation, industrial systems, advanced materials, automation and emerging technologies.",
    'The examples below illustrate work carried out during earlier professional roles. They show how engineering analysis, systems thinking and technical leadership help organizations address complex problems and progress from research to industrial implementation.',
  ],
  casesHeading: 'Selected cases',
  publicationsHeading: 'Research and Publications',
  publicationsIntro:
    'Engineering practice is complemented by doctoral research in advanced materials, three-dimensional characterization and computational analysis.',
  perspectiveHeading: 'Our perspective',
  perspective:
    'Many industrial challenges span mechanics, materials, electronics, software, modelling, automation and operations. Integrae offers senior-led technical judgement to connect evidence and design decisions across these disciplines.',
  cta: {
    heading: 'Discuss an Engineering Challenge',
    copy: 'Share a concise description of your technical context. We respond to serious consultancy and training enquiries.',
    button: 'Contact Integrae',
    href: '/contact/',
  },
  metaDescription:
    'Selected engineering experience of the Integrae founder across biotechnology automation, digital twins, mobility, materials research, hydrogen membranes and industrial AI.',
} as const;

export const homeCredibility = {
  items: [
    {
      value: '20+',
      label: 'years',
      detail: 'professional engineering and technology experience.',
    },
    {
      value: '30+',
      label: 'engineers',
      detail: "teams involved in multidisciplinary programs led during the founder's prior professional appointments.",
    },
    {
      value: 'Dr.Eng.',
      label: 'doctorate',
      detail: 'doctoral-level mechanical engineering research.',
    },
  ],
  footnote:
    "The figures refer to the founder's professional background, not Integrae's company age, current workforce or company-delivered projects.",
} as const;

export const homeTrackRecordTeaser = {
  heading: 'Experience Connecting Analysis with Implementation',
  intro:
    'From advanced materials research and engineering simulation to integrated biotechnology and energy systems, Integrae draws upon substantial founder experience across complex technical environments.',
  secondaryLabel: 'Selected previous professional experience of the founder.',
  cards: [
    {
      title: 'Biotechnology Automation',
      summary: 'integrated systems, regulated development and multidisciplinary leadership.',
      href: '/track-record/#regulated-biotechnology-automation',
    },
    {
      title: 'Digital Twins and Virtual Validation',
      summary: 'simulation-driven assessment of industrial electromechanical systems.',
      href: '/track-record/#digital-twins-virtual-validation',
    },
    {
      title: 'Materials and Energy',
      summary: 'research translation, advanced membranes and industrial readiness planning.',
      href: '/track-record/#advanced-materials-computational-research',
    },
  ],
  cta: { label: 'Explore the Track Record', href: '/track-record/' },
} as const;
