import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components'
import SectionContent from './SectionContent'
import { P } from './Typography';

const StyledAbout = styled(SectionContent)`
  --top-offset: calc(var(--stack-block400) + var(--header100) - var(--stack-offset));
  --section-height: var(--section-tall);
  z-index: 1;
  top: calc(var(--stack-block400) + var(--header100) - var(--stack-offset) - var(--section-tall));
  height: var(--section-height);
  background-color: ${({ theme }) => theme.bg4 };
  border-bottom: .05rem solid  ${({ theme }) => theme.bg4 };
  border-bottom-left-radius: 1rem;

  h2 {
    top: calc(var(--stack-start) + var(--stack-block300));
  }

  h3 {
    margin-block-start: 0;
  }
  .content {
    margin-bottom: var(--stack-block400);
  }
`

const About = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledAbout {...props}>
      <h3>Portfolio v0.1.0</h3> 
      <P>Best viewed on desktop at fullscreen. Mobile version coming in the next project sprint. Built with <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React v18</a>, <a href="https://styled-components.com/" target="_blank" rel="noreferrer">styled-components</a>, and <a href="https://www.radix-ui.com/" target="_blank" rel="noreferrer">Radix Primitives</a>, deployed on <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify.</a> The sticky scroll is a hand-rolled React hook that uses the magic of CSS and the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" rel="noreferrer" target="_blank">Intersection Observer API.</a></P>
      
      <P>Typographic direction aided by <a href="https://type-scale.com/" target="_blank" rel="noreferrer">Type Scale</a>.</P>
      
      <P>Icon Credits: <a href="https://www.flaticon.com/authors/syafii5758" rel="noreferrer" target="_blank">Weather</a> | <a href="https://www.flaticon.com/" rel="noreferrer" target="_blank">Github</a> | <a href="https://www.flaticon.com/" rel="noreferrer" target="_blank">LinkedIn</a> |  <a href="https://icons8.com/icons/authors/p8VPlvrruECd/inipagistudio" rel="noreferrer" target="_blank">Email</a></P>


      <P>{ themeContext.type === 'dark' ? '🤍' :  '🖤'} to the <a href="https://radious.pro/" rel="noreferrer" target="_blank">Radious</a> crew for the bio pic and workspace for the day</P>
    </StyledAbout>
  )
}
  
export default About

//<a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by pictogramer - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Aldo Cervantes - Flaticon</a>