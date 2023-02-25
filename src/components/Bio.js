import styled from 'styled-components'
import { H1, P } from './Typography'
import ToggleTheme from './ToggleTheme'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import * as Tooltip from '@radix-ui/react-tooltip'
import breakpoints from '../styles/breakpoints'

const StyledBio = styled.div`
  .tooltip-root {
    //need higher z-index to stack above grid that is positioning the ThoughtSpiral intersection observer hook
    z-index: 11;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-top: .6rem;
    position: absolute;
    transform: translate(-1.6rem, -.7rem);
  } 
  
  .tooltip-trigger {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 3rem;
    width: 3rem; 
    margin: 0;
    border: none;
    border-radius: 50%;
    opacity: .6;
    color: ${({ theme }) => theme.tip};
    font-family: 'Sanchez';
    font-size: 5rem;
    font-weight: 400;
    line-height: 1;
    mix-blend-mode: ${({ theme }) => theme.type === 'dark' ? 'screen' : 'multiply'};
    cursor: pointer;
    -webkit-transition: opacity .1s ease-out;
    -moz-transition: opacity .1s ease-out;
    -o-transition: opacity .1s ease-out;
    transition: opacity .1s ease-out;
    cursor: unset;
    
    :hover {
        opacity: 1;
      }
  }

  .tooltip-content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 15rem;
    padding-block: .6rem;
    padding-inline: 1rem;
    background: ${({ theme }) => theme.backgroundA };
    border: .1rem solid ${({ theme }) => theme.color };
    border-radius: .5rem;
    
    p {
      margin: 0;
      font-family: 'Source Sans Pro', sans-serif; 
      font-size: .8rem;
      line-height: 1;
      font-weight: 600;
    }
  }
  
  .tooltip-arrow {
    fill: ${({ theme }) => theme.color };
  }

  .fixed {
    position: fixed;
    top: 0;
  }

  @media screen and ${breakpoints.large} {
    .tooltip-root {
      transform: translate(-1rem, -.9rem);
    }

    .tooltip-trigger {
      height: 2rem;
      width: 2rem; 
      font-size: 4rem;  
    }
  }
`

export default function Bio({ toggleTheme }) {
  const [triggerRef, isIntersecting] = useIntersectionObserver()

  return (
    <StyledBio> 
      <div className='wrapper'>
        <H1 ref={triggerRef}>
          Hi, I’m DJ Drakos!
        </H1>
        <Tooltip.Root asChild>
          <div className={isIntersecting ? 'tooltip-root fixed' : 'tooltip-root'}>
            <Tooltip.Trigger className='tooltip-trigger'>
              *
            </Tooltip.Trigger>
            <Tooltip.Content className='tooltip-content' align={'center'} side={'bottom'}>
              <Tooltip.Arrow className='tooltip-arrow'/>
              <P>
                {isIntersecting ? 'looks like good coding weather today' : '(they/them)'}
              </P>
            </Tooltip.Content>
          </div>
        </Tooltip.Root>
      </div>
      <P>
        I’m a Software Developer based in&nbsp;
        <ToggleTheme toggleTheme={toggleTheme} />
        &nbsp;Portland, Oregon.
      </P>
      <P>
        I love bringing well-crafted, accessible applications to life
        <br/ >
        using modern, scalable web technologies and design patterns.
      </P>
    </StyledBio>
  )
}