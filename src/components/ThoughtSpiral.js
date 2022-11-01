import styled from 'styled-components'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const StyledSpiral = styled.div`
  z-index: 10;
  position: absolute;
  padding-left: 5.5rem;
  padding-top: 1.5rem;
  height: fit-content;
  width: 7rem;

  > div {
    padding-top: .5rem;
  }

  p {
    font-family: 'Noto Emoji', sans-serif;
    font-weight: 300;
    color: ${({ theme }) => theme.spiral };
    padding-top: .5rem;
    height: fit-content;
    width: fit-content;
    font-size: 2rem;
    cursor: pointer;
    transform: rotate(50deg);
    opacity: .6;
    -webkit-transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;

    :hover {
      opacity: 1;
    }
  }

  .fixed {
    position: fixed;
    top: 0;
  }
`

export default function ThoughtSpiral() {
  const [ triggerRef, isIntersecting ] = useIntersectionObserver()

  return (
    <StyledSpiral>
      <div ref={triggerRef}>
        <p className={ isIntersecting ? 'fixed' : ''}>
          🌀
        </p>
      </div>
    </StyledSpiral>
  )
}