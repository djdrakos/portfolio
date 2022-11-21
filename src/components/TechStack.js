import styled from 'styled-components'
import SectionContent from './SectionContent'
import { H5, H6, P } from './Typography'

const StyledTechStack = styled(SectionContent)`
  --section-height: var(--section-tall);
  --stack-block: var(--stack-block200);
  z-index: 3;
  background-color: ${({ theme }) => theme.bg2 };
  border-bottom: .05rem solid ${({ theme }) => theme.bg2 };
  border-bottom-left-radius: 1rem;
  
  h3 {
    margin-block: 0;
  }
`

const TechStack = (props) => {
  return (
    <StyledTechStack {...props}>
      <H5 as="h3">Languages</H5>
      <P>JavaScript ES6 / HTML5 / CSS3 / Sass</P>

      <H5 as="h3">Libraries & Frameworks</H5>
      <P>React.js / Node.js / Express / styled-components</P>

      <H5 as="h3">Databases</H5>
      <P>PostgreSQL / Sequelize / Supabase</P>

      <H5 as="h3">Testing</H5>
      <P>Jest / QUnit / Supertest / React Testing Library</P>

      <H5 as="h3">Dev Tools</H5>
      <P>Github / VSCode / Postman / pgAdmin </P>

      <H5 as="h3">Deployment</H5>
      <P>Heroku / Netlify / Vercel</P>

      <H5 as="h3">Design</H5>
      <P>Adobe Creative Suite / Sketch / Figma</P>

      <H5 as="h3">Practices</H5>
      <P>Agile, Pair Programming, RESTful APIs, Test Driven Development, Design Driven Development</P>

      <H5 as="h3">Learning</H5>
      <P>Typescript / GraphQL / Python</P>
    </StyledTechStack>
  )
}

export default TechStack