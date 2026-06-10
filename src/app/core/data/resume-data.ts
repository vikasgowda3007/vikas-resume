import { Resume } from '../models/resume/resume.module';

export const RESUME: Resume = {
  name: 'Vikas Keshavamurthy',
  role: 'I build secure, dependable product software',
  location: 'Tempe, AZ',
  summary:
    'Six years shipping enterprise software across data security and telecom, now completing an M.S. in Computer Science at Arizona State University. I work best across the full stack — Angular frontends, Java and Node.js services — and care about software that holds up under real use.',
  profileStatement:
    'I spent six years shipping enterprise software — the Masking Engine at Delphix, telecom messaging at Comviva — before moving to Tempe for grad school. These days I split my time between coursework, grading for ASU’s Software Security class, and building with AI tooling. I’m looking for an internship where I can ship real product.',
  portrait: {
    src: 'assets/portraits/vikas-hero-1120.jpg',
    srcSet: 'assets/portraits/vikas-hero-760.jpg 760w, assets/portraits/vikas-hero-1120.jpg 1120w',
    avifSrcSet: 'assets/portraits/vikas-hero-760.avif 760w, assets/portraits/vikas-hero-1120.avif 1120w',
    alt: 'Portrait of Vikas Keshavamurthy smiling in a warm indoor setting',
    width: 1120,
    height: 1382,
    objectPosition: 'center 16%'
  },
  metrics: [
    {
      value: '6',
      label: 'years shipped',
      detail: 'Enterprise data security and telecom platforms'
    },
    {
      value: '30%',
      label: 'bug backlog reduction',
      detail: 'Driven through Angular UI modernization'
    },
    {
      value: '20%',
      label: 'faster testing',
      detail: 'Component tests and release workflow improvements'
    }
  ],
  coursework: [
    'Software Security',
    'Advanced Computer Network Security',
    'Distributed Database Systems',
    'Artificial Intelligence',
    'Knowledge Representation',
    'Software Design'
  ],
  currentFocus: [
    'M.S. in Computer Science at Arizona State University',
    'Teaching Assistant / Grader for Software Security',
    'Angular + Java / Node.js product engineering',
    'Building an AI resume-tailoring product with Python and LLMs'
  ],
  links: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vikas-keshavamurthy-b027b1165',
      external: true
    },
    {
      label: 'GitHub',
      href: 'https://github.com/vikasgowda3007',
      external: true
    },
    {
      label: 'Resume PDF',
      href: 'assets/Vikas-Keshavamurthy-Resume.pdf',
      external: false
    }
  ],
  experience: [
    {
      company: 'Delphix by Perforce',
      role: 'Senior Software Development Engineer',
      period: 'Jul 2021 – May 2025',
      location: 'India',
      description:
        'Owned full-stack delivery for the Masking Engine — the Angular frontend, the Java services behind it, and the release process that shipped them.',
      impact:
        'Cut the bug backlog by 30%, lifted customer satisfaction 15%, and reduced testing time 20% through UI modernization and steadier releases.',
      highlights: [
        'Built and maintained RESTful integrations between the Angular frontend and Java backend services for an enterprise data security platform.',
        'Led end-to-end release cycles as designated release engineer, coordinating QA signoffs and deployments across two parallel development teams.',
        'Partnered with product, QA, and security teams to deliver data-masking features that protected PII across enterprise deployments.',
        'Mentored junior developers and performed root-cause analysis of distributed service issues across Java, JavaScript, Docker, and PostgreSQL.'
      ],
      technologies: ['Angular', 'Java', 'JavaScript', 'Python', 'Docker', 'PostgreSQL', 'Jenkins']
    },
    {
      company: 'Comviva, A Tech Mahindra Company',
      role: 'Senior Software Developer',
      period: 'Aug 2019 – Jul 2021',
      location: 'India',
      description:
        'Built telecom messaging infrastructure — SMS, MMS, USSD — from high-throughput backend services down to pricing and operations tooling.',
      impact:
        'Became the team’s SMSC subject-matter expert, leading firewall and SMSHub integration projects across multiple telecom client deployments.',
      highlights: [
        'Designed and developed the UNO messaging platform for 4G traffic using GoLang, MySQL, Oracle DB, and Redis.',
        'Implemented time and volume restrictions for SMS traffic plus an Opt-In / Opt-Out Do Not Disturb workflow using Java and MySQL.',
        'Automated supplier price ingestion and cost application using Node.js, React.js, and Oracle DB.'
      ],
      technologies: ['GoLang', 'Java', 'Node.js', 'React.js', 'MySQL', 'Oracle DB', 'Redis', 'Linux/Unix']
    },
    {
      company: 'Comviva, A Tech Mahindra Company',
      role: 'Software Engineering Intern',
      period: 'Jan 2019 – May 2019',
      location: 'India',
      description:
        'Worked on observability and search for production systems during an early engineering internship.',
      highlights: [
        'Designed Elasticsearch-based activity logging to capture and query user actions in real time.',
        'Integrated Lucene search capabilities to improve retrieval speed and platform traceability.'
      ],
      technologies: ['Elasticsearch', 'Lucene', 'Java']
    }
  ],
  projects: [
    {
      name: 'AI Resume Generator',
      type: 'Personal Project',
      tagline: 'One command turns a job description into a tailored, truthful resume.',
      description:
        'A local AI product that tailors a resume and cover letter to any job description — Llama 3.3-70B via Groq, with a master-profile schema that keeps every generated line traceable to real experience. Grew from a script into a licensed web app with job-fit scoring, Gmail application tracking, and a memory system that learns preferences over time.',
      period: 'Mar 2026 – Present',
      technologies: ['Python', 'Groq LLM API', 'Llama 3.3-70B', 'Flask / Dash', 'Gmail API', 'python-docx']
    },
    {
      name: 'Self-Tracking Telescope',
      type: 'Class Project',
      tagline: 'A telescope that finds and follows the night sky on its own.',
      description:
        'Class project combining sensors, actuators, and a control loop so the telescope locks onto a celestial object and keeps tracking it as the sky moves.',
      period: 'Sep 2025',
      technologies: ['Embedded Systems', 'Real-time Computing', 'Sensors & Actuators']
    },
    {
      name: 'Kavach Webpage',
      type: 'Personal Project',
      tagline: 'Onboarding site for an open-source authentication library.',
      description:
        'Angular site introducing the open-source Kavach authentication library — docs, onboarding, and publishing information for new users.',
      period: 'Summer 2020',
      technologies: ['Angular', 'HTML', 'CSS', 'JavaScript']
    }
  ],
  skills: [
    {
      category: 'Frontend & Product',
      items: ['Angular', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Interface modernization']
    },
    {
      category: 'Backend & APIs',
      items: ['Java', 'Node.js', 'RESTful APIs', 'LLM APIs', 'Redis', 'Elasticsearch']
    },
    {
      category: 'Languages',
      items: ['Java', 'Python', 'C++', 'JavaScript', 'GoLang', 'Bash']
    },
    {
      category: 'Data, DevOps & Tooling',
      items: ['PostgreSQL', 'MySQL', 'Oracle DB', 'MS SQL', 'Docker', 'Jenkins', 'GitHub Copilot']
    }
  ],
  recognition: [
    'Engineering Excellence Award (2024)',
    'Best Talent Award (FY20-21)',
    'Heroes of MBS Award'
  ],
  education: [
    {
      school: 'Arizona State University',
      degree: 'M.S. in Computer Science',
      period: 'Aug 2025 – May 2027',
      location: 'Tempe, AZ',
      gpa: '3.78',
      highlights: [
        'Teaching Assistant / Grader for Software Security',
        'Coursework: Software Security, Advanced Computer Network Security, Distributed Database Systems, Artificial Intelligence, Knowledge Representation, Software Design'
      ]
    },
    {
      school: 'R.V. College of Engineering',
      degree: 'B.E. in Computer Science',
      period: 'Aug 2015 – May 2019',
      location: 'Bangalore, India',
      gpa: '3.33'
    }
  ],
  contact: {
    email: 'vkeshav5@asu.edu',
    phone: '623-274-7294',
    location: 'Tempe, AZ',
    availability:
      'Open to software engineering internships and product roles while I finish my M.S. in Computer Science (May 2027).',
    authorization: 'F-1 student on CPT'
  }
};
