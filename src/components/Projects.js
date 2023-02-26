import styled from 'styled-components'
import SectionContent from './SectionContent'
import * as Tabs from '@radix-ui/react-tabs';
import ProjectDetail from './ProjectDetail';
import projectData from './projectData';
import { P } from './Typography';
import breakpoints from '../styles/breakpoints';
import { forwardRef } from 'react';

const StyledProjects = styled(SectionContent)`
  --background-color: ${({ theme }) => theme.bg1 };
  --section-height: var(--section-xtall);
  --stack-block: var(--stack-block100);
  z-index: 4;

  p {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: .25rem;
  }

  .tab-trigger {
    border: .1rem solid transparent;
    
    &:hover {
      cursor: pointer;
      border-bottom: .1rem solid ${({ theme }) => theme.color};
      -webkit-transition: all .1s ease-out;
      -moz-transition: all .1s ease-out;
      -o-transition: all .1s ease-out;
      transition: all .1s ease-out;
    }
    
    &[data-state='active'] {
      border-bottom: .1rem solid ${({ theme }) => theme.color};
    }
  }

  .project-titles {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

  ${`@media screen and ${breakpoints.small}`} {
    p {
      margin-top: .5rem;
    }
    
    .project-titles {
      flex-direction: column;
      align-items: flex-start;

      button[data-state='active'] > p:before {
      content: '☝';
      display: inline-block;
      font-family: 'Noto Emoji';
      padding-inline: .3rem;
      transform: rotate(.25turn) scale(-1, 1);
      }
    }
  }
`

const Projects = forwardRef((props, ref) => {
  const TOP_OFFSET=68
  return (
    <StyledProjects {...props} topOffset={TOP_OFFSET} ref={ref}>
      <Tabs.Root defaultValue={projectData[0].id}>
        <Tabs.List className='project-titles'>
          { projectData.map(project => {
          return (
            <Tabs.Trigger asChild className='tab-trigger' key={project.id} value={project.id}>
              <P>{project.title}</P>
            </Tabs.Trigger>
              )
            })
          }
        </Tabs.List>

      { projectData.map(project => {
        return (
          <Tabs.Content asChild className='tab-content' key={project.id} value={project.id}>
            <ProjectDetail project={project}/>
          </Tabs.Content>
          )
        })
      }
      </Tabs.Root>
    </StyledProjects>
  )
})

export default Projects