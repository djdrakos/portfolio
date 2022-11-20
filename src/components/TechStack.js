import styled from 'styled-components'
import SectionContent from './SectionContent'
import { P } from './Typography'

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
    font-size: 1rem;
    margin-block: 0;
  }
`

const TechStack = (props) => {
  return (
    <StyledTechStack {...props}>
      <h3>Languages</h3>
      <P>JavaScript ES6 / HTML5 / CSS3 / Sass</P>

      <h3>Libraries & Frameworks</h3>
      <P>React.js / Node.js / Express / styled-components</P>

      <h3>Databases</h3>
      <P>PostgreSQL / Sequelize / Supabase</P>

      <h3>Testing</h3>
      <P>Jest / QUnit / Supertest / React Testing Library</P>

      <h3>Dev Tools</h3>
      <P>Github / VSCode / Postman / pgAdmin </P>

      <h3>Deployment</h3>
      <P>Heroku / Netlify / Vercel</P>

      <h3>Design</h3>
      <P>Adobe Creative Suite / Sketch / Figma</P>

      <h3>Practices</h3>
      <P>Agile, Pair Programming, RESTful APIs, Test Driven Development, Design Driven Development</P>

      <h3>Learning</h3>
      <P>Typescript / GraphQL / Python</P>
    </StyledTechStack>
  )
}

export default TechStack