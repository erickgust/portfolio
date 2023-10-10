import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJSON from './locales/en.json'
import ptJSON from './locales/pt.json'

export const resources = {
  en: { ...enJSON },
  pt: { ...ptJSON },
} as const

const language = navigator.language.split(/[-_]/)[0]
console.log(language)

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
})
