import styled from 'styled-components'
import Bio from './Bio'
import Section from './Section'
import ThoughtSpiral from './ThoughtSpiral'
import * as Tooltip from '@radix-ui/react-tooltip'

const StyledHero = styled(Section)`
  min-height: var(--section-short);
  display: grid;
  grid-template-columns: var(--bio-pic100) minmax(var(--bio-pic200), var(--bio-pic300));
  align-items: flex-start;
  column-gap: var(--gap100);

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
        <div className="wrapper portrait">
          <img src={require("../assets/dj.jpg")} className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
        </div>
        <ThoughtSpiral />
        <Bio toggleTheme={toggleTheme}/>
      </Tooltip.Provider>
    </StyledHero>
  )
}