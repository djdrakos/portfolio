import styled from 'styled-components'
import About from './About'
import Career from './Career'
import Hero from './Hero'
import Projects from './Projects'
import TechStack from './TechStack'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: var(--gap300);
  padding-top: var(--gap300);
  padding-bottom: calc(100vh - var(--header100) - var(--stack-block400));
`

export default function Main({ currentTheme, toggleTheme }) {
  return (
    <StyledMain className="App">
      <Hero currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Projects />
      <TechStack mask={ {'start' : '0%', 'end': '20%'} }/>
      <Career />
      <About />
    </StyledMain>
  )
}