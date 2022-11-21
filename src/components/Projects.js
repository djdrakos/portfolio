import styled from 'styled-components'
import SectionContent from './SectionContent'
import * as Tabs from '@radix-ui/react-tabs';
import ProjectDetail from './ProjectDetail';
import projectData from './projectData';
import { P } from './Typography';

const StyledProjects = styled(SectionContent)`
  --section-height: var(--section-tall);
  --stack-block: var(--stack-block100);
  z-index: 4;
  background-color: ${({ theme }) => theme.bg1 };
  border-bottom: .05rem solid ${({ theme }) => theme.bg1 };
  border-bottom-left-radius: 1rem;

  p {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: .25rem;
  }

  .tab-trigger {
    border: .1rem solid transparent;
    
    &:hover {
      border-bottom: .1rem solid ${({ theme }) => theme.color};
      -webkit-transition: all .1s;
      -moz-transition: all .1s;
      -o-transition: all .1s;
      transition: all .1s;
    }
    
    &[data-state='active'] {
      border-bottom: .1rem solid ${({ theme }) => theme.color};
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
    <StyledProjects {...props}>
      <Tabs.Root defaultValue={projectData[0].id}>
        <Tabs.List className='titles'>
          { projectData.map(project => {
          return (
            <Tabs.Trigger className='tab-trigger' key={project.id} value={project.id}>
              <P>{project.title}</P>
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