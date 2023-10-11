import markee from '@/ui/markee.webp'
import landing from '@/ui/landing-page.webp'
import letmeask from '@/ui/letmeask.webp'
import mycontacts from '@/ui/mycontacts.webp'
import tmdb from '@/ui/tmdb.webp'

type Project = {
  title: string
  techs: string
  url: string
  id: number
  banner?: {
    src: string
  }
}

export const projects: Project[] = [
  {
    title: 'MyContacts',
    techs: 'TypeScript, React, NodeJS & PostgreSQL',
    url: 'https://github.com/erickgust/my-contacts-front',
    id: 1,
    banner: {
      src: mycontacts,
    },
  },
  {
    title: 'TMDB Movies',
    techs: 'React, TypeScript, Tailwind & React Query',
    url: 'https://github.com/erickgust/promobit-tmdb',
    id: 2,
    banner: {
      src: tmdb,
    },
  },
  {
    title: 'Markee',
    techs: 'React, TypeScript & Styled Components',
    url: 'https://markee-gus.netlify.app/',
    id: 3,
    banner: {
      src: markee,
    },
  },
  {
    title: 'Landing Page Agency',
    techs: 'HTML & CSS',
    url: 'https://erickgust.github.io/landing-page-agency/',
    id: 4,
    banner: {
      src: landing,
    },
  },
  {
    title: 'Letmeask',
    techs: 'React, TypeScript & SCSS',
    url: 'https://github.com/erickgust/letmeask-nlw6',
    id: 5,
    banner: {
      src: letmeask,
    },
  },
  {
    title: 'Calculator',
    techs: 'JavaScript, HTML & CSS',
    url: 'https://github.com/erickgust/calculator-js',
    id: 6,
  },
]
