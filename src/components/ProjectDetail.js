import styled from 'styled-components'
import { forwardRef } from 'react'
import Link from './Link'
import { H5, P } from './Typography'

const StyledProjectDetail = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-block-start: 2rem;
    max-height: 200px;
    width: auto;
    border-radius: .5rem;
    opacity: .7;
    filter: grayscale(100%);
    -webkit-transition: all .1s ease-out;
    -moz-transition: all .1s ease-out;
    -o-transition: all .1s ease-out;
    transition: all .1s ease-out;

    &:hover {
      opacity: 1;
      filter: brightness(110%);
    }
  }

  .img-link {
      margin-inline: auto;

    &:hover {
      border-bottom: unset;
    }
  }

  .wrapper {
    align-items: baseline;
  }

  .project-title, .project-content {
    margin-block-end: 0;
  }
  
  .project-link {
    text-transform: capitalize;
  }

  .project-title {
    text-transform: capitalize;
    border-bottom: .1rem solid ${({ theme }) => theme.color };
  }

  p:last-child {
    margin-top: 1rem;
  }
`

const ProjectDetail = forwardRef(({project, ...props}, ref) => {
  const { img, title, liveUrl, login, repoUrl, toolkit, description } = project
  return (
    <StyledProjectDetail {...props} ref={ref}>
      <Link className="img-link" href={liveUrl}>
        <img src={`/screenshots/${img}`} alt='' />
      </Link>
      <H5 as="h3" className="project-title">{title}</H5>
      <P className='.project-content'>
        <Link className="project-link" href={liveUrl}>Live Site</Link>
        
        { repoUrl.map(({ label, url }, index) => {
        return (
          <span key={index}>
            &nbsp;|&nbsp;<Link className="project-link" href={url}>{label}</Link>
          </span>
        )}) }
      </P>

      { login && 
        <P className=".project-content">
          <strong>Username & Password: </strong> {login.username}, {login.password}
      </P>
      }

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
})

export default ProjectDetail