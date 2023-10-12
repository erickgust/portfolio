import styled from 'styled-components'
import { About } from './about'
import { Header } from './header'
import { Hero } from './hero'
import { Projects } from './projects'
import { Skills } from './skills'

const Container = styled.div`
  max-width: 114rem;
  padding: 0 2.4rem;
  margin: 0 auto;
  position: relative;
`

export function App () {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </Container>
  )
}
