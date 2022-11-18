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
        <p>
          <a href="https://fem-clock-app-ten.vercel.app/" target="_blank" rel="noreferrer">
            Local Clock App
          </a>
        </p>
        <p>
          <a href="https://dark-sky-log.netlify.app/signup" target="_blank" rel="noreferrer">
            Dark Sky Observer App
          </a>
        </p>
        <p>
          <a href="https://advice-dice.netlify.app/" target="_blank" rel="noreferrer">
            Advice Dice
          </a>
        </p>
        <p>
          <a href="https://gorgeous-griffin-5766e6.netlify.app/" target="_blank" rel="noreferrer">
            Time Tracking   Dashboard
          </a>
      </p>
      </div>
    </StyledProjects>
  )
}

export default Projects