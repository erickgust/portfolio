import markee from '@/ui/markee.webp'
import landing from '@/ui/landing-page.webp'
import letmeask from '@/ui/letmeask.webp'

type Project = {
  title: string
  techs: string
  url: string
  id: number
  banner?: {
    src: string
    alt: string
  }
}

export const projects: Project[] = [
  {
    title: 'Markee',
    techs: 'React, TypeScript e Styled Components',
    url: 'https://github.com/erickgust/markee',
    id: 1,
    banner: {
      src: markee,
      alt: 'Banner do projeto Markee',
    },
  },
  {
    title: 'Calculator',
    techs: 'JavaScript, HTML e CSS',
    url: 'https://github.com/erickgust/calculator-js',
    id: 2,
  },
  {
    title: 'Github Profile',
    techs: 'TypeScript, HTML e CSS',
    url: 'https://github.com/erickgust/github-profile',
    id: 3,
  },
  {
    title: 'Landing Page Agency',
    techs: 'HTML e CSS',
    url: 'https://github.com/erickgust/landing-page-agency',
    id: 4,
    banner: {
      src: landing,
      alt: 'Banner do projeto de landing page',
    },
  },
  {
    title: 'Letmeask',
    techs: 'React, TypeScript e SCSS',
    url: 'https://github.com/erickgust/letmeask-nlw6',
    id: 5,
    banner: {
      src: letmeask,
      alt: 'Banner do projeto let me ask',
    },
  },
  {
    title: 'Portfólio FiredLabs',
    techs: 'JavaScript, HTML e CSS',
    url: 'https://github.com/erickgust/html-css-firedlabs',
    id: 6,
  },
]
