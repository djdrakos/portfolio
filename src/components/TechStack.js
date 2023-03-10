import styled from 'styled-components'
import SectionContent from './SectionContent'
import { H5, P } from './Typography'
import breakpoints from '../styles/breakpoints'

const StyledTechStack = styled(SectionContent)`
  --background-color: ${({ theme }) => theme.bg2 };
  --section-height: var(--section-short);
  --stack-block: var(--stack-block200);
  z-index: 3;
  
  h3 {
    margin-block: 0;
  }

  ${`@media screen and ${breakpoints.small}`} {
    --section-height: var(--section-med);
  }
`

const TechStack = (props) => {
  const TOP_OFFSET=108
  return (
    <StyledTechStack topOffset={TOP_OFFSET} {...props}>
      <H5 as="h3">Languages</H5>
      <P>JavaScript ES6 / TypeScript / HTML5 / CSS3 / Python / SQL</P>

      <H5 as="h3">Technologies</H5>
      <P>React.js / Node.js / WordPress / Docker / AWS</P>

      <H5 as="h3">Design</H5>
      <P>Adobe Creative Suite / Sketch / Figma</P>

      <H5 as="h3">Practices</H5>
      <P>Agile / CI/CD / Pair Programming / RESTful APIs / Test-Driven Development / Version Control</P>
    </StyledTechStack>
  )
}

export default TechStack