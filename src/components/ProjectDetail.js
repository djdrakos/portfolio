import styled from 'styled-components'
import { H5, P } from './Typography'

const StyledProjectDetail = styled.div`
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    margin-block-start: 2rem;
    width: 100%;
    max-width: 25rem;
    border-radius: .5rem;
  }

  .wrapper {
    align-items: baseline;
  }

  .project-title, .project-content{
    margin-block-end: 0;

    a {
      text-transform: capitalize;
    }
  }
  
  .project-title {
    text-transform: capitalize;
    border-bottom: .1rem solid ${({ theme }) => theme.color };
  }

  p:last-child {
    margin-top: 1rem;
  }
`

export default function ProjectDetail({project}) {
  const { img, title, liveUrl, repoUrl, toolkit, description } = project
  return (
    <StyledProjectDetail>
      <img src={`/screenshots/${img}`} alt='' />
      <H5 as ="h3" className="project-title">{title}</H5>
      <P className='.project-content'>
        <a href={liveUrl} target="_blank" rel="noreferrer">Live Site</a>
        
        { repoUrl.map(({ label, url }) => {
        return (
          <>
            &nbsp;|&nbsp;<a href={url} target="_blank" rel="noreferrer">{label}</a>
          </>
        )}) }
      </P>
      <P className='.project-content'>
        <strong>
          Toolkit:
        </strong> 
        { toolkit.map((tool, index) => {
          if(index < toolkit.length - 1) return (` ${tool} |`)
          return ` ${tool}`
          })
        }
      </P>
      <P className='.project-content'>{description}</P>
    </StyledProjectDetail>
  )
}