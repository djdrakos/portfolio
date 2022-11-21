import styled from 'styled-components'
import Bio from './Bio'
import GridContainer from './GridContainer'
import ThoughtSpiral from './ThoughtSpiral'
import * as Tooltip from '@radix-ui/react-tooltip'
import GridItem from './GridItem'

const StyledHero = styled(GridContainer)`
  min-height: var(--section-short);

  .wrapper.portrait {
    max-width: var(--bio-pic100);
    max-height: var(--bio-pic100);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.type === 'dark' ? theme.color300 : 'none'};
    overflow: hidden;
  } 

  img.portrait {
    isolation: isolate;
    max-width: 130%;
    height: auto;
    filter: grayscale();
    mix-blend-mode: ${({ theme }) => theme.type === 'dark' ? 'overlay' : ''};
    object-fit: cover;
    object-position: calc( -1 * var(--gap100)) calc( -1 * var(--gap150));
    opacity: ${({ theme }) => theme.type === 'dark' ? .5 : .6 };
    }
    
  .fixed {
    position: fixed;
    top: 0;
  }
  `

export default function Hero({ toggleTheme }) {

  return (
    <StyledHero>
      <Tooltip.Provider delayDuration={100}>
        <GridItem m={4} justifyContent={'center'}>
          <div className="wrapper portrait">
            <img src={require("../assets/dj.jpg")} className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
          </div>
          <ThoughtSpiral/>
        </GridItem>
        <GridItem m={8} justifyContent={'flex-start'}>
          <Bio toggleTheme={toggleTheme}/>
        </GridItem>
      </Tooltip.Provider>
    </StyledHero>
  )
}