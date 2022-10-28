import styled from 'styled-components'
import SectionContent from './SectionContent'

const StyledProjects = styled(SectionContent)`
  z-index: 4;
  top: calc(var(--stack-block100) + var(--header100) - var(--stack-offset) - var(--section-med));
  height: var(--section-med);
  background-color: hsla(100, 70%, 60%, .15);
  border-bottom: .1rem solid hsla(100, 70%, 60%, .01);
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
    align-self: flex-end;
    align-items: flex-end;
    justify-content: space-between;
}
`

export default function Projects(props) {
  return (
    <StyledProjects title="projects" {...props}>
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