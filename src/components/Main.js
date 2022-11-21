import styled from 'styled-components'
import About from './About'
import Career from './Career'
import Hero from './Hero'
import Projects from './Projects'
import TechStack from './TechStack'
import breakpoints from '../styles/breakpoints'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: var(--gap200);
  padding-top: var(--gap300);
  padding-bottom: calc(100vh - var(--header100) - var(--stack-block400));

  @media screen and (${breakpoints.large}) {
    row-gap: var(--gap100);
  }
`

export default function Main({ toggleTheme }) {
  return (
    <StyledMain>
      <Hero toggleTheme={toggleTheme} />
      <Projects title="featured projects"/>
      <TechStack title="Toolkit"/>
      <Career title="career"/>
      <About title="Colophon" />
    </StyledMain>
  )
}