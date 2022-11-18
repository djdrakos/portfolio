import styled from 'styled-components'

const StyledProjectDetail = styled.div`
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    margin-block-start: 2rem;
    width: 25rem;
    border-radius: .5rem;
  }

  .wrapper {
    /* display: flex;
    justify-content: space-between; */
    align-items: baseline;
  }

  h5, p{
    /* display: inline; */
    margin-block-end: 0;

    a {
      text-transform: capitalize;
    }
  }
  
  h5 {
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
      <h5>{title}</h5>
      <p>
        <a href={liveUrl} target="_blank" rel="noreferrer">Live Site</a>
        
        { repoUrl.map(({ label, url }) => {
        return (
          <>
            &nbsp;|&nbsp;<a href={url} target="_blank" rel="noreferrer">{label}</a>
          </>
        )}) }
      </p>
      <p>
        <strong>
          Toolkit:
        </strong> 
        { toolkit.map((tool, index) => {
          if(index < toolkit.length - 1) return (` ${tool} |`)
          return ` ${tool}`
          })
        }
      </p>
      <p>{description}</p>
    </StyledProjectDetail>
  )
}