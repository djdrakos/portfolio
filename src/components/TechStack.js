import styled from 'styled-components'
import SectionContent from './SectionContent'
import { H5, H6, P } from './Typography'

const StyledTechStack = styled(SectionContent)`
  --top-offset: calc(var(--stack-block200) + var(--header100) - var(--stack-offset));
  --section-height: var(--section-tall);
  z-index: 3;
  top: calc(var(--stack-block200) + var(--header100) - var(--stack-offset) - var(--section-tall));
  height: var(--section-height);
  background-color: ${({ theme }) => theme.bg2 };
  border-bottom: .05rem solid ${({ theme }) => theme.bg2 };
  border-bottom-left-radius: 1rem;
  
  .content {
    margin-bottom: var(--stack-block200);
  }

  h2 {
    top: calc(var(--stack-start) + var(--stack-block100));
  }

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