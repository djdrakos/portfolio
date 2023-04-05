import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components'
import SectionContent from './SectionContent'
import Link from './Link';
import { P } from './Typography';

const StyledAbout = styled(SectionContent)`
  --background-color: ${({ theme }) => theme.bg4 };
  --section-height: var(--section-short);
  --stack-block: var(--stack-block400);
  z-index: 1;

  h3 {
    margin-block-start: 0;
  }
`

const About = (props) => {
  const themeContext = useContext(ThemeContext);
  const TOP_OFFSET = 204
  return (
    <StyledAbout topOffset={TOP_OFFSET} {...props}>
      <h3>Portfolio v0.1.1</h3> 
      <P>Best viewed on desktop at full screen. Mobile version looks pretty good too, though. Built with <Link href="https://reactjs.org/">React v18</Link>, <Link href="https://styled-components.com/">styled-components</Link>, and <Link href="https://www.radix-ui.com/">Radix Primitives</Link>, deployed on <Link href="https://www.netlify.com/">Netlify.</Link> The icon sticky scroll is a hand-rolled React hook that uses the magic of CSS and the <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API.</Link></P>
      
      <P>Typographic direction aided by <Link href="https://type-scale.com/">Type Scale</Link>.</P>
      
      <P>Icon Credits: <Link href="https://www.flaticon.com/authors/syafii5758">Weather</Link> | <Link href="https://www.flaticon.com/">GitHub</Link> | <Link href="https://www.flaticon.com/">LinkedIn</Link> | <Link href="https://icons8.com/icons/authors/p8VPlvrruECd/inipagistudio">Email</Link></P>


      <P>{ themeContext.type === 'dark' ? '🤍' :  '🖤'} to the <Link href="https://radious.pro/">Radious</Link> crew for the bio pic and workspace for the day</P>
    </StyledAbout>
  )
}
  
export default About