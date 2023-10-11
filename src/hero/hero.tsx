import pdfEn from '../../static/en-cv.pdf'
import pdfPt from '../../static/pt-cv.pdf'

import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'react-i18next'

import * as S from './hero-styles'

import { ReactComponent as HeroImage } from '@/ui/hero.svg'

const orbit = keyframes`
  from {
    transform: rotate(0deg) translateX(50px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(50px) rotate(-360deg);
  }
`

const AnimatedHeroImage = styled(HeroImage)`
  animation: ${orbit} 8s linear infinite;
`

export function Hero () {
  const { t, i18n: { language } } = useTranslation()

  const phoneNumber = '+5547999942468'
  const curriculumPath = language === 'en' ? pdfEn : pdfPt

  return (
    <S.Section>
      <S.Main>
        <h1>{t('myName', { name: 'Erick' })} 😃</h1>
        <p>{t('role')}</p>

        <S.InfoButtons>
          <S.Button
            as='a'
            primary
            aria-label="Download CV"
            href={curriculumPath}
            download='cv-erick.pdf'
          >
            Download CV
          </S.Button>

          <S.Button
            as='a'
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contactMe')}
          >
            {t('contactMe')}
          </S.Button>
        </S.InfoButtons>
      </S.Main>

      <aside role="complementary">
        <AnimatedHeroImage title="Hero image" />
      </aside>
    </S.Section>
  )
}
