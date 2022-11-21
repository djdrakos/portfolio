import styled from 'styled-components'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import * as Tooltip from '@radix-ui/react-tooltip';
import { P } from './Typography';
import breakpoints from '../styles/breakpoints';

const StyledSpiral = styled.div`
  --pad: 15vw;
  z-index: 10;
  position: absolute;
  
  .intersection-content {
    width: calc(100vw - (2* var(--pad)));
    display: grid;
    grid-template-columns: repeat(12, minmax(1rem, 6rem));
    column-gap: 1rem;
  }
  
  .spiral-trigger {
    grid-column-start: 3;
    margin-left: auto;
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

    .spiral-content {

    }
  }

  @media screen and (${breakpoints.large}) {
    --pad: 12vw;

    .spiral-content {
      margin-top: -.3rem;
    }

    .fixed .spiral-content {
      margin-top: .5rem;
    }
  }

  @media screen and (${breakpoints.medium}) {
    --pad: 3rem;
    
    .intersection-content { 
      display: block;
      grid-template-columns: unset;
      column-gap: unset;
    }
    
    .spiral-trigger {
      display: block;
      grid-column-start: unset;
      margin-left: auto;
      margin-right: .3rem;
      margin-top: 1rem;
    }

    .spiral-content {
      margin-top: -.3rem;
    }

    .fixed .spiral-content {
      margin-top: 0;
    }
  }

  @media screen and (${breakpoints.small}) {
    --pad: 2rem;
  }

`

export default function ThoughtSpiral() {
  const [ triggerRef, isIntersecting ] = useIntersectionObserver()

  return (
      <StyledSpiral>
        <div className="intersection-trigger" ref={triggerRef} />
        <div className={ isIntersecting ? 'intersection-content fixed' : 'intersection-content'}>
          <Tooltip.Root asChild>
            <Tooltip.Trigger className='spiral-trigger' >
              🌀
            </Tooltip.Trigger>
            <Tooltip.Content className='spiral-content' align={'start'} side={'left'} sticky={'always'} >
            <Tooltip.Arrow className='tooltip-arrow' />
              <P>Coding... Coding...</P>
            </Tooltip.Content>
          </Tooltip.Root>
        </div>
      </StyledSpiral>
  )
}