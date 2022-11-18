import styled from 'styled-components'
import SectionContent from './SectionContent'

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

  h4 {
    top: calc(var(--stack-start) + var(--stack-block100));
  }

  h5 {
    font-size: 1rem;
    margin-block: 0;
  }
`

const TechStack = (props) => {
  return (
    <StyledTechStack title="Toolkit" {...props}>
      <h5>Languages</h5>
      <p>JavaScript ES6 / HTML5 / CSS3 / Sass</p>

      <h5>Libraries & Frameworks</h5>
      <p>React.js / Node.js / Express / styled-components</p>

      <h5>Databases</h5>
      <p>PostgreSQL / Sequelize / Supabase</p>

      <h5>Testing</h5>
      <p>Jest / QUnit / Supertest / React Testing Library</p>

      <h5>Dev Tools</h5>
      <p>Github / VSCode / Postman / pgAdmin </p>

      <h5>Deployment</h5>
      <p>Heroku / Netlify / Vercel</p>

      <h5>Design</h5>
      <p>Adobe Creative Suite / Sketch / Figma</p>

      <h5>Practices</h5>
      <p>Agile, Pair Programming, RESTful APIs, Test Driven Development, Design Driven Development</p>

      <h5>Learning</h5>
      <p>Typescript / GraphQL / Python</p>
    </StyledTechStack>
  )
}

export default TechStack