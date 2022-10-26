import styled from 'styled-components'
import About from './About'
import Career from './Career'
import Intro from './Intro'
import Projects from './Projects'
import TechStack from './TechStack'

const StyledMain = styled.main`
`

export default function Main({ currentTheme, toggleTheme }) {
  return (
    <StyledMain className="App">
    <Intro currentTheme={currentTheme} toggleTheme={toggleTheme} />
    <Projects />
    <TechStack />
    <Career />
    <About />
    <section></section>
    <section></section>
    <section></section>
  </StyledMain>
  )
}