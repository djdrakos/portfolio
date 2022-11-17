import styled from 'styled-components'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import * as Popover from '@radix-ui/react-popover';

const StyledSpiral = styled.div`
  z-index: 10;
  position: absolute;
  padding-left: 5.5rem;
  padding-top: 1.5rem;
  width: 7rem;

  .spiral-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    height: 3rem;
    width: 3rem; 

    p {
      font-family: 'Noto Emoji', sans-serif;
      font-weight: 300;
      color: ${({ theme }) => theme.spiral };
      margin: 0;
      font-size: 2rem;
      cursor: pointer;
      /* transform: rotate(50deg); */
      opacity: .6;
      -webkit-transition: opacity .2s ease-out;
      -moz-transition: opacity .2s ease-out;
      -o-transition: opacity .2s ease-out;
      transition: opacity .2s ease-out;
  
      :hover {
        opacity: 1;
      }
    }
  }
  
  .spiral-content {
    max-width: 10rem;
    border-radius: .1rem;
    
    p {
      font-family: 'Source Sans Pro', sans-serif; 
      font-weight: 600;
      text-transform: uppercase;
      /* color: ${({ theme }) => theme.spiral }; */
      background-color: ${({ theme }) => theme.backgroundA };
      border: .1rem solid ${({ theme }) => theme.color };
      backdrop-filter: blur(1px);
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      border-radius: .5rem;
      padding-block: .6rem;
      padding-inline: 1rem;
      font-size: .8rem;
    }
  }
  
  .popover-arrow {
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
    <Popover.Root asChild>
      <StyledSpiral>
        <Popover.Trigger className="spiral-trigger" ref={triggerRef}>
          <Popover.Anchor asChild>
            <p className={ isIntersecting ? 'fixed' : ''}>
              🌀
            </p>
          </Popover.Anchor>
        </Popover.Trigger>
        <Popover.Content className='spiral-content' align={'end'} side={'left'} sticky={'always'} alignOffset={-10} avoidCollisions={false}>
        <Popover.Arrow className='popover-arrow' />
          <p>
            Coding... Coding...
          </p>
        </Popover.Content>
      </StyledSpiral>
    </Popover.Root>
  )
}