export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  capabilities: string[];
  icon: 'systems' | 'simulation' | 'ai' | 'rnd' | 'materials' | 'leadership';
};

export const servicesIntro = {
  eyebrow: 'Services',
  title: 'Engineering & Technology Services',
  lead: 'Deep technical expertise, integrated across disciplines.',
  copy: 'Integrae provides independent technical advisory, engineering analysis and development support for organizations working with complex technologies.',
};

export const services: Service[] = [
  {
    id: 'systems-engineering',
    number: '01',
    title: 'Systems Engineering & Mechatronics',
    shortTitle: 'Systems Engineering & Mechatronics',
    summary:
      'Architecture, integration, requirements and verification of complex multidisciplinary systems.',
    description:
      'We support the definition, architecture, integration and validation of multidisciplinary engineering systems.',
    capabilities: [
      'Systems architecture and requirements engineering',
      'Mechanical, electrical and software integration',
      'Mechatronic system development',
      'Verification and validation strategies',
      'Risk analysis and system-level trade-offs',
      'Technical design reviews',
      'Complex system problem solving',
    ],
    icon: 'systems',
  },
  {
    id: 'modelling-simulation',
    number: '02',
    title: 'Modelling, Simulation & Digital Twins',
    shortTitle: 'Simulation & Digital Twins',
    summary:
      'Physics-based modelling, numerical analysis, virtual validation and simulation-driven decisions.',
    description:
      'We use analytical and computational modelling to understand physical behaviour, evaluate designs and support informed engineering decisions.',
    capabilities: [
      'Physics-based numerical modelling',
      'Mechanical and dynamic system simulation',
      'Finite element methods',
      'Virtual validation and design assessment',
      'Digital twin concepts and implementation strategies',
      'Engineering data interpretation',
      'Model verification and validation',
      'Simulation-driven product development',
    ],
    icon: 'simulation',
  },
  {
    id: 'industrial-ai',
    number: '03',
    title: 'Artificial Intelligence & Engineering Data',
    shortTitle: 'Industrial AI',
    summary:
      'Engineering analytics, machine learning, intelligent workflows and practical AI integration.',
    description:
      'We help engineering organizations integrate AI and intelligent data tools into technical workflows while maintaining transparency, reliability and human supervision.',
    capabilities: [
      'AI opportunity and feasibility assessment',
      'Machine learning for engineering applications',
      'Technical data analysis',
      'Engineering knowledge-management workflows',
      'AI-assisted documentation and analysis',
      'Intelligent process and workflow automation',
      'AI integration with engineering software',
      'Evaluation, validation and risk management of AI-enabled solutions',
    ],
    icon: 'ai',
  },
  {
    id: 'rnd-innovation',
    number: '04',
    title: 'R&D, Innovation & Product Development',
    shortTitle: 'R&D & Innovation',
    summary:
      'Technology evaluation, feasibility, product strategy, technical innovation and development roadmaps.',
    description:
      'We support research and technology organizations in translating technical ideas into structured development programs and viable industrial applications.',
    capabilities: [
      'Research and technology evaluation',
      'Technical feasibility studies',
      'Concept development and validation',
      'Innovation and R&D portfolio management',
      'Product development processes',
      'Technology roadmaps',
      'Intellectual-property strategy support',
      'Prototyping and industrialization planning',
      'Technical due diligence',
    ],
    icon: 'rnd',
  },
  {
    id: 'materials-energy',
    number: '05',
    title: 'Advanced Materials & Energy Technologies',
    shortTitle: 'Materials & Energy',
    summary:
      'Materials engineering, membrane technologies, hydrogen systems and pathways toward industrial application.',
    description:
      'Integrae combines materials science, engineering analysis and technology-development experience to support advanced materials and energy-related applications.',
    capabilities: [
      'Advanced materials and composite systems',
      'Materials characterization and modelling',
      'Membrane and electrochemical technologies',
      'Hydrogen technology development pathways',
      'Materials-related engineering challenges',
      'Technical validation and manufacturability assessment',
      'Industrial scale-up planning',
      'Research translation and technology deployment',
    ],
    icon: 'materials',
  },
  {
    id: 'technical-leadership',
    number: '06',
    title: 'Technical Leadership & Program Delivery',
    shortTitle: 'Technical Leadership',
    summary:
      'Engineering program management, technical governance, product development leadership and independent advisory.',
    description:
      'We help organizations structure, govern and deliver complex multidisciplinary engineering and technology programs.',
    capabilities: [
      'Engineering project and program management',
      'Technical strategy and governance',
      'Product development leadership',
      'Risk and stakeholder management',
      'Cross-functional technical coordination',
      'Engineering process improvement',
      'Development planning and milestone reviews',
      'Independent expert assessment',
      'Fractional technical leadership, subject to agreement',
    ],
    icon: 'leadership',
  },
];

export const engagementModels = {
  heading: 'How We Work',
  items: [
    {
      title: 'Focused Technical Advisory',
      description: 'Targeted support on a defined engineering question or decision.',
    },
    {
      title: 'Project-Based Engineering Support',
      description: 'Structured analysis and deliverables for a specific technical challenge.',
    },
    {
      title: 'Technology & R&D Advisory',
      description: 'Independent evaluation of research, innovation and deployment opportunities.',
    },
    {
      title: 'Technical Leadership',
      description: 'Senior multidisciplinary guidance for selected programs.',
    },
    {
      title: 'Training & Mentoring',
      description: 'Tailored educational programs and technical capability development.',
    },
  ],
};

export const servicesCta = {
  heading: 'Ready to discuss a technical challenge?',
  copy: 'Share the context of your project and we will respond with a clear next step.',
  button: 'Discuss a Project',
  href: '/contact/',
};
