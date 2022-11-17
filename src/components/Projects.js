import styled from 'styled-components'
import SectionContent from './SectionContent'

const StyledProjects = styled(SectionContent)`
  --top-offset: var(--header100);
  --section-height: var(--section-med);
  z-index: 4;
  top: calc(var(--stack-block100) + var(--header100) - var(--stack-offset) - var(--section-med));
  height: var(--section-height);
  background-color: ${({ theme }) => theme.bg1 };
  border-bottom: .05rem solid ${({ theme }) => theme.bg1 };
  border-bottom-left-radius: 1rem;

  h4 {
    top: var(--stack-start);
    }

  .content {
    margin-bottom: var(--stack-block100)
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: var(--stack-offset);
    line-height: 2;
  }

  .titles {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
}
`

const Projects = (props) => {
  return (
    <StyledProjects  title="projects">
      <div className='titles'>
        <p>Random Quote Generator</p>
        <p>Dark Sky Observer App</p>
        <p>Tales of Torr</p>
        <p>Bienventory</p>
        <p>Affirbisiaks</p>
      </div>
    </StyledProjects>
  )
}

export default Projects