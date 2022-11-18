import styled from 'styled-components'
import SectionContent from './SectionContent'
import * as Tabs from '@radix-ui/react-tabs';
import ProjectDetail from './ProjectDetail';
import projectData from './projectData';

const StyledProjects = styled(SectionContent)`
  --top-offset: var(--header100);
  --section-height: var(--section-tall);
  z-index: 4;
  top: calc(var(--stack-block100) + var(--header100) - var(--stack-offset) - var(--section-tall));
  height: var(--section-height);
  background-color: ${({ theme }) => theme.bg1 };
  border-bottom: .05rem solid ${({ theme }) => theme.bg1 };
  border-bottom-left-radius: 1rem;

  h4 {
    top: var(--stack-start);
    }

  p {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: var(--stack-offset);
    line-height: 2;
  }

  .tab-content {
    margin-bottom: var(--stack-block100)
  }

  .tab-trigger {
    border: none;
  
    &:hover {
      text-decoration: none;
      -webkit-transition: all .1s;
      -moz-transition: all .1s;
      -o-transition: all .1s;
      transition: all .1s;
      text-decoration: underline;
    }

    &[data-state='active'] {

    }
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
    <StyledProjects title="featured projects">
      <Tabs.Root defaultValue={projectData[0].id}>
        <Tabs.List className='titles'>
          { projectData.map(project => {
          return (
            <Tabs.Trigger className='tab-trigger' key={project.id} value={project.id}>
              <p>{project.title}</p>
            </Tabs.Trigger>
              )
            })
          }
        </Tabs.List>

      { projectData.map(project => {
        return (
          <Tabs.Content className='tab-content' key={project.id} value={project.id}>
            <ProjectDetail project={project}/>
          </Tabs.Content>
          )
        })
      }

      </Tabs.Root>
    </StyledProjects>
  )
}

export default Projects