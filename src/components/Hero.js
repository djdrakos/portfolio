import styled from 'styled-components'
import Bio from './Bio'
import GridContainer from './GridContainer'
import ThoughtSpiral from './ThoughtSpiral'
import * as Tooltip from '@radix-ui/react-tooltip'
import GridItem from './GridItem'
import breakpoints from '../styles/breakpoints'

const StyledHero = styled(GridContainer)`
  height: min-content;

  .wrapper-portrait {
    width: 15rem;
    margin-left: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.type === 'dark' ? theme.color300 : 'none'};
    overflow: hidden;
  } 

  .portrait {
    isolation: isolate;
    height: auto;
    filter: grayscale();
    mix-blend-mode: ${({ theme }) => theme.type === 'dark' ? 'overlay' : ''};
    object-fit: contain;
    opacity: ${({ theme }) => theme.type === 'dark' ? .5 : .6 };
    }
    
  .fixed {
    position: fixed;
    top: 0;
  }

  @media screen and (${breakpoints.large}) {
    .wrapper-portrait{
      max-width: 12.75rem;
      width: 100%;
    }
  }
  `

export default function Hero({ toggleTheme }) {

  return (
    <StyledHero>
      <Tooltip.Provider delayDuration={100}>
        <GridItem m={3}>
          <div className="wrapper-portrait">
            <img src={require("../assets/dj.jpg")} className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
          </div>
          <ThoughtSpiral/>
        </GridItem>
        <GridItem m={9} justifyContent={'flex-start'}>
          <Bio toggleTheme={toggleTheme}/>
        </GridItem>
      </Tooltip.Provider>
    </StyledHero>
  )
}