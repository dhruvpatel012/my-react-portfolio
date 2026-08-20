import { LuSchool, LuBookOpen, LuGraduationCap, LuCode } from 'react-icons/lu'

// education and frontend learning milestones.
export const journeyData = [
  {
    id: 'secondary-education',
    period: '2020 – 2021',
    year: '2020 – 2021',
    title: 'Secondary Education (10th)',
    subtitle: 'High School Milestone',
    description: 'Completed secondary education from GSEB with an overall score of 87.33%.',
    icon: LuSchool,
  },
  {
    id: 'higher-secondary',
    period: '2021 – 2023',
    year: '2021 – 2023',
    title: 'Higher Secondary Education (12th)',
    subtitle: 'Science Stream',
    description: 'Completed higher secondary education from GSEB with an overall score of 69.5% in the Science stream.',
    icon: LuBookOpen
  },
  {
    id: 'be-computer-engineering',
    period: '2023 – Present',
    year: '2023 – Present',
    title: 'B.E. in Computer Engineering',
    subtitle: 'Currently in 7th Semester',
    description: 'Currently pursuing B.E. in Computer Engineering. Built a strong foundation in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks and Software Engineering.',
    icon: LuGraduationCap,
    isCurrent: true
  },
  {
    id: 'frontend-journey',
    period: '2025 – Present',
    year: '2025 – Present',
    title: 'Frontend Development Journey',
    subtitle: 'Self-Taught Developer',
    description: 'Started my self-directed journey in frontend development, focusing on HTML, CSS, JavaScript and React to build responsive and interactive web experiences.',
    icon: LuCode,
    isCurrent: true
  }
]
