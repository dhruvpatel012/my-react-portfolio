import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiGithub,
  SiVercel
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa6'
import { TbBrandVscode } from 'react-icons/tb'

// Core technology stack and developer tools with official brand color codes.
export const skillsData = [
  {
    id: 'react',
    name: 'React',
    icon: SiReact,
    brandColor: '#61DAFB',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: SiJavascript,
    brandColor: '#F7DF1E',
    hasDarkChip: true,
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    brandColor: '#38BDF8',
  },
  {
    id: 'html5',
    name: 'HTML5',
    icon: SiHtml5,
    brandColor: '#E34F26',
  },
  {
    id: 'css3',
    name: 'CSS3',
    icon: FaCss3Alt,
    brandColor: '#1572B6',
  },
  {
    id: 'git',
    name: 'Git',
    icon: SiGit,
    brandColor: '#F05033',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: SiGithub,
    isMonochrome: true,
  },
  {
    id: 'vscode',
    name: 'VS Code',
    icon: TbBrandVscode,
    brandColor: '#007ACC',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    icon: SiVercel,
    isMonochrome: true,
  }
]
