import { LuSchool, LuBookOpen, LuGraduationCap, LuCode } from 'react-icons/lu'

// Academic timeline and engineering milestones matching portfolio_update_spec.md
export const journeyData = [
  {
    id: 'secondary-education',
    period: 'Jul 2020 – Jul 2021',
    year: '2020 – 2021',
    title: 'Secondary Education (10th)',
    subtitle: 'Nilkanth Vidhyalay, Morbi',
    description: 'Completed 10th standard (GSHSEB) with an overall score of 87.33%.',
    icon: LuSchool,
  },
  {
    id: 'higher-secondary',
    period: 'Jul 2022 – Jul 2023',
    year: '2022 – 2023',
    title: 'Higher Secondary (12th Science)',
    subtitle: 'Nirmal Vidhyalay, Morbi',
    description: 'Completed 12th standard Science stream (GSHSEB) with an overall score of 69.5%.',
    icon: LuBookOpen,
  },
  {
    id: 'be-computer-engineering',
    period: '2023 – Apr 2027 (Expected)',
    year: '2023 – 2027',
    title: 'B.E. in Computer Engineering',
    subtitle: 'LDRP-ITR, Gandhinagar',
    description: 'Pursuing B.E. in Computer Engineering. Cumulative CGPA: 7.18/10 through Semester 6. Expected graduation: April 2027.',
    icon: LuGraduationCap,
    isCurrent: true,
  },
  {
    id: 'fullstack-journey',
    period: '2026 – Present',
    year: '2026 – Present',
    title: 'Full Stack & MERN Development',
    subtitle: 'Software Engineering & Web Apps',
    description: 'Building full-stack web applications with React, Node.js, Express, FastAPI, and MongoDB. Integrating REST APIs, authentication, and cloud deployment.',
    icon: LuCode,
    isCurrent: true,
  },
]

// Professional certifications from resume
export const certificationsData = [
  {
    id: 'nptel-python',
    title: 'Python for Data Science',
    issuer: 'NPTEL (SWAYAM), IIT Madras',
    period: 'Jul – Aug 2025',
  },
  {
    id: 'mern-stack',
    title: 'Full Stack Development with MERN',
    issuer: 'ThingQbator / Zikshaa / Nasscom Foundation',
    period: 'Completed',
  },
]
