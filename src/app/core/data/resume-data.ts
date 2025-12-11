import { Resume } from '../models/resume/resume.module';

export const RESUME: Resume = {
  name: 'Vikas Keshavamurthy',
  role: 'Senior Software Developer · M.S. CS Candidate',
  location: 'Tempe, AZ, USA',
  summary:
    'Results-oriented senior software developer with 6 years of experience in the Data Security and Telecommunication industry. Proven track record of delivering innovative solutions, mentoring engineers, and leading projects in agile environments. Currently pursuing an M.S. in Computer Science and seeking a Software Developer Internship for Summer 2025.',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vikas-keshavamurthy-b027b1165',
      external: true
    },
    {
      label: 'Download CV',
      href: 'assets/Vikas-Keshavamurthy-Software-Developer-Intern.pdf',
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
        'Senior engineer focused on data masking solutions, with a strong emphasis on revamping the Masking Engine UI and improving the reliability and performance of enterprise products.',
      highlights: [
        'Designed and implemented new features to enhance product functionality using Angular and Java.',
        'Remodeled the user interface for the Masking Engine, improving usability for sensitive data masking workflows.',
        'Served as both release lead and hands-on developer, coordinating across two teams in parallel to ship high-quality releases.',
        'Troubleshot production issues and optimized performance and reliability using JavaScript, Java, Docker, and PostgreSQL.',
        'Collaborated with cross-functional teams to gather requirements and deliver robust, maintainable software solutions.',
        'Mentored junior developers and provided ongoing technical guidance to support their growth and effectiveness.'
      ],
      technologies: ['Angular', 'Java', 'JavaScript', 'Docker', 'PostgreSQL', 'Jenkins', 'GitHub']
    },
    {
      company: 'Comviva, A Tech Mahindra Company',
      role: 'Senior Software Developer',
      period: 'Aug 2019 – Jul 2021',
      location: 'India',
      description:
        'Developed innovative messaging solutions leveraging SMS, MMS, and USSD technologies, and became a Subject Matter Expert for the SMSC module.',
      highlights: [
        'Designed and developed a comprehensive messaging platform (Project UNO) that handled 4G messaging (SMS, MMS, USSD) using GoLang, MySQL, Oracle DB, and Redis.',
        'Implemented time and volume restrictions for SMS traffic and built an Opt-In/Opt-Out Do Not Disturb feature using Java and MySQL.',
        'Automated the process of uploading and processing supplier prices, streamlining how SMS costs were applied using Node.js, React.js, and Oracle DB.',
        'Recognized as Best Talent (2021) and Heroes of MBS (2020) for key contributions to messaging solutions.'
      ],
      technologies: ['GoLang', 'Java', 'Node.js', 'React.js', 'MySQL', 'Oracle DB', 'Redis', 'Linux/Unix']
    },
    {
      company: 'Comviva, A Tech Mahindra Company',
      role: 'Software Engineering Intern',
      period: 'Jan 2019 – May 2019',
      location: 'India',
      description:
        'Internship focused on observability and change tracking for production systems.',
      highlights: [
        'Designed activity logs using Elasticsearch to capture and query user actions.',
        'Built an automated system to record all user changes and index them into Elasticsearch for traceability and analysis.'
      ],
      technologies: ['Elasticsearch', 'Java', 'Linux/Unix']
    }
  ],
  projects: [
    {
      name: 'Self-Tracking Telescope',
      tagline: 'Cyber-Physical Systems class project for autonomous celestial tracking.',
      description:
        'Designing and developing a self-tracking telescope (CPS) that integrates sensors, actuators, and real-time computing to autonomously track celestial objects and maintain focus through concurrent feedback loops.',
      period: 'Sep 2025',
      technologies: ['Embedded Systems', 'Real-time Computing', 'Sensors & Actuators']
    },
    {
      name: 'Kavach Webpage',
      tagline: 'Public-facing site for NGO Team Kavach.',
      description:
        'Developed an interactive Angular-based webpage for onboarding and publishing information for NGO Team Kavach, enabling smoother communication and visibility for the organization.',
      period: 'Summer 2020',
      technologies: ['Angular', 'HTML', 'CSS', 'JavaScript']
    }
  ],
  skills: [
    {
      category: 'Programming Languages',
      items: ['Java', 'JavaScript', 'GoLang', 'Bash']
    },
    {
      category: 'Frontend',
      items: ['Angular', 'React.js', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      category: 'Backend & Platforms',
      items: ['Node.js', 'PostgreSQL', 'MySQL', 'MS SQL', 'Oracle DB', 'Redis']
    },
    {
      category: 'Tools & DevOps',
      items: ['Jenkins', 'GitHub', 'Docker', 'Windows', 'macOS', 'Linux/Unix']
    },
    {
      category: 'Soft Skills',
      items: ['Agile methodologies', 'Communication', 'Mentoring', 'Team player', 'Problem-solving']
    },
    {
      category: 'Awards & Certifications',
      items: [
        'Engineering Excellence Award (2024, Delphix from Perforce)',
        'Best Talent (2021, Comviva)',
        'Heroes of MBS (2020, Comviva)',
        'SIP, GoLang, React.js, and The Complete Node.js Developer Course (Udemy)'
      ]
    }
  ],
  education: [
    {
      school: 'Arizona State University',
      degree: 'M.S. in Computer Science',
      period: 'Aug 2025 – May 2027',
      location: 'Tempe, AZ, USA'
    },
    {
      school: 'R.V. College of Engineering',
      degree: 'B.E. in Computer Science (GPA 3.33)',
      period: 'Aug 2015 – May 2019',
      location: 'Bangalore, India'
    }
  ],
  contact: {
    email: 'vkeshav5@asu.edu',
    phone: '+1 623-274-7294',
    location: 'Tempe, AZ, USA',
    availability: 'Seeking Software Developer Internship opportunities for Summer 2025.'
  }
};
