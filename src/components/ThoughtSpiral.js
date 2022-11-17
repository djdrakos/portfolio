import styled from 'styled-components'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import * as Tooltip from '@radix-ui/react-tooltip';

const StyledSpiral = styled.div`
  z-index: 10;
  position: absolute;
  width: 7rem;
  padding-left: 5.5rem;
  padding-top: 1.5rem;

  .spiral-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 3rem; 
    margin: 0;
    border: none;
    border-radius: 50%;
    opacity: .6;
    color: ${({ theme }) => theme.spiral };
    font-family: 'Noto Emoji', sans-serif;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    -webkit-transition: opacity .1s ease-out;
    -moz-transition: opacity .1s ease-out;
    -o-transition: opacity .1s ease-out;
    transition: opacity .1s ease-out;

    :hover {
      opacity: 1;
    }
  }
  
  .spiral-content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 10rem;
    padding-block: .6rem;
    padding-inline: 1rem;
    background-color: ${({ theme }) => theme.backgroundA };
    backdrop-filter: blur(1px);
    border: .1rem solid ${({ theme }) => theme.color };   
    border-radius: .5rem;
    font-family: 'Source Sans Pro', sans-serif; 
    font-weight: 600;
    font-size: .8rem;
    line-height: 1;
    text-transform: uppercase;
  }
  
  .tooltip-arrow {
    fill: ${({ theme }) => theme.color };
  }

  .fixed {
    position: fixed;
    top: 0;
  }
`

export default function ThoughtSpiral() {
  const [ triggerRef, isIntersecting ] = useIntersectionObserver()

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root asChild>
        <StyledSpiral>
          <div className="wrapper" ref={triggerRef}>
            <div className={ isIntersecting ? 'intersection-trigger fixed' : 'intersection-trigger'}>
              <Tooltip.Trigger className='spiral-trigger' >
                🌀
              </Tooltip.Trigger>
              <Tooltip.Content className='spiral-content' align={'end'} side={'left'} sticky={'always'} avoidCollisions={false}>
              <Tooltip.Arrow className='tooltip-arrow' />
                Coding... Coding...
              </Tooltip.Content>
            </div>
          </div>
        </StyledSpiral>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}