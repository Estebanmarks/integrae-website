export const contactPage = {
  eyebrow: 'Contact',
  title: 'Discuss Your Engineering Challenge',
  lead:
    'Share a concise description of your technical context. We respond to serious consultancy and training enquiries.',
};

export const contactDetails = {
  heading: 'Direct Contact',
  items: [
    {
      label: 'Email',
      value: 'info@integrae.com.cy',
      href: 'mailto:info@integrae.com.cy',
    },
    {
      label: 'Phone',
      value: '+357 97 491406',
      href: 'tel:+35797491406',
    },
    {
      label: 'Location',
      value: 'Nicosia, Cyprus',
      href: null,
    },
    {
      label: 'LinkedIn',
      value: 'Integrae Engineering',
      href: 'https://www.linkedin.com/company/integrae-engineering/',
    },
  ],
};

export const contactForm = {
  heading: 'Send an Enquiry',
  note: 'This form opens your email client with a structured message to info@integrae.com.cy. No data is stored on this website.',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'company', label: 'Company / Organization', type: 'text', required: false },
    { name: 'subject', label: 'Subject', type: 'text', required: true },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ],
  submitLabel: 'Compose Email',
};

export const contactTopics = {
  heading: 'Typical Enquiries',
  items: [
    'Independent technical advisory on a defined engineering decision',
    'Modelling, simulation or digital-twin support',
    'AI feasibility for engineering workflows',
    'Technology evaluation and R&D advisory',
    'Training workshops and mentoring programs',
  ],
};
