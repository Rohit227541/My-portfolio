import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase,
  FaGitAlt, FaBootstrap, FaPhp, FaWordpress,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiMongodb, SiTailwindcss,
  SiPrisma, SiPostman, SiVercel, SiLinux,
} from 'react-icons/si'
import { FaGithub, FaCode } from 'react-icons/fa'
import { BiLogoVisualStudio } from 'react-icons/bi'

export const frontendSkills = [
  { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-200' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
]

export const backendSkills = [
  { name: 'Node.js', icon: FaNodeJs, color: 'text-gray-200' },
  { name: 'PHP', icon: FaPhp, color: 'text-purple-400' },
  { name: 'REST APIs', icon: FaCode, color: 'text-gray-200' },
  { name: 'WordPress', icon: FaWordpress, color: 'text-blue-400' },
]

export const databaseSkills = [
  { name: 'MySQL', icon: FaDatabase, color: 'text-blue-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-gray-200' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-gray-200' },
]

export const toolsSkills = [
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-200' },
  { name: 'VS Code', icon: BiLogoVisualStudio, color: 'text-blue-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
  { name: 'Vercel', icon: SiVercel, color: 'text-gray-200' },
  { name: 'cPanel', icon: FaDatabase, color: 'text-yellow-500' },
  { name: 'Linux', icon: SiLinux, color: 'text-yellow-400' },
]

export const skillCategories = [
  { title: 'Frontend', skills: frontendSkills },
  { title: 'Backend', skills: backendSkills },
  { title: 'Database', skills: databaseSkills },
  { title: 'Tools & Deployment', skills: toolsSkills },
]
