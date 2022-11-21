import styled from 'styled-components'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import * as Tooltip from '@radix-ui/react-tooltip';
import { P } from './Typography';
import breakpoints from '../styles/breakpoints';

const StyledSpiral = styled.div`
  z-index: 10;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(24, minmax(1rem, 3.5rem));
  padding-right: clamp(5rem, 15vw, 9rem);
  
  
  .grid-content {
    grid-column-start: 2;
  }

  .spiral-trigger {
    height: 3rem;
    width: 3rem; 
    border: none;
    border-radius: 50%;
    opacity: .6;
    color: ${({ theme }) => theme.spiral };
    font-family: 'Noto Emoji', sans-serif;
    font-size: 2rem;
    font-weight: 300;
    -webkit-transition: opacity .1s ease-out;
    -moz-transition: opacity .1s ease-out;
    -o-transition: opacity .1s ease-out;
    transition: opacity .1s ease-out;

    :hover {
      opacity: 1;
    }
  }
  
  .spiral-content {
    max-width: 10rem;
    padding-block: .6rem;
    padding-inline: 1rem;
    background-color: ${({ theme }) => theme.backgroundA };
    backdrop-filter: blur(2px);
    border: .1rem solid ${({ theme }) => theme.color };   
    border-radius: .5rem;
    
    p {
      font-family: 'Source Sans Pro', sans-serif; 
      font-weight: 600;
      font-size: .8rem;
      line-height: 1;
      text-transform: uppercase;
      margin: 0;
    }
  }
  
  .tooltip-arrow {
    fill: ${({ theme }) => theme.color };
  }

  .fixed {
    position: fixed;
    top: var(--stack-block400);
  }

    @media screen and (${breakpoints.tablet}) {
    padding-right: clamp(3rem, 12vw, 5rem);
  }
`

export default function ThoughtSpiral() {
  const [ triggerRef, isIntersecting ] = useIntersectionObserver()

  return (
      <StyledSpiral>
        <div className="grid-content">
          <div className="intersection-trigger" ref={triggerRef} />
          <div className={ isIntersecting ? 'fixed' : ''}>
            <Tooltip.Root asChild>
              <Tooltip.Trigger className='spiral-trigger' >
                🌀
              </Tooltip.Trigger>
              <Tooltip.Content className='spiral-content' align={'end'} side={'left'} sticky={'always'} >
              <Tooltip.Arrow className='tooltip-arrow' />
                <P>Coding... Coding...</P>
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
        </div>
      </StyledSpiral>
  )
}