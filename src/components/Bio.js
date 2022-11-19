import styled from 'styled-components'
import ToggleThemeButton from './ToggleThemeButton'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import * as Tooltip from '@radix-ui/react-tooltip'

const StyledBio = styled.div`
  h1 {
    display: inline
  }
  
  h1 strong {
    display: inline-block;
    font-family: 'Source Code Pro';
    font-weight: 600;
    letter-spacing: -.03em;
    word-spacing: -.2em;
  }

  p {
    font-weight: 500;
  }

  .intersection-content {
    z-index: 10;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-top: .6rem;
    position: absolute;
    transform: translate(-1.9rem, -.7rem);
  }

  .tooltip-root {
    display: block;
  };
  
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
    background-color: ${({ theme }) => theme.backgroundA };
    backdrop-filter: blur(1px);
    border: .1rem solid ${({ theme }) => theme.color };   
    border-radius: .5rem;
    
    p {
      margin: 0;
      font-family: 'Source Sans Pro', sans-serif; 
      font-weight: 600;
      font-size: .8rem;
      line-height: 1;
    }
  }
  
  .tooltip-arrow {
    fill: ${({ theme }) => theme.color };
  }

  .fixed {
    position: fixed;
    top: 0;
  }
`

export default function Bio({ toggleTheme }) {
  const [triggerRef, isIntersecting] = useIntersectionObserver()

  return (
    <StyledBio> 
        <div className='wrapper'>
          <h1>
            Hi, I’m 
            <strong ref={triggerRef}>
              &nbsp;DJ Drakos!
            </strong> 
          </h1>
          <div className={isIntersecting ? 'intersection-content fixed' : 'intersection-content'}>
            <Tooltip.Root>
              <Tooltip.Trigger className='tooltip-trigger'>
                *
              </Tooltip.Trigger>
              <Tooltip.Content className='tooltip-content' side={'bottom'} avoidCollisions={false} >
                <p>
                  {isIntersecting ? 'looks like good coding weather today' : '(they/them)'}
                </p>
                <Tooltip.Arrow className='tooltip-arrow'/>
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
        </div>
        <p>
          I’m a Fullstack Software Engineer/Creative
          <br/ >
          based in 
          <ToggleThemeButton toggleTheme={toggleTheme} />
          Portland, Oregon.
        </p>
        <p>
          I love bringing well-crafted, accessible applications to life
          <br/ >
          using modern, scalable web technologies and design patterns.
        </p>
  </StyledBio>
  )
}