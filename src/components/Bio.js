import styled from 'styled-components'
import ToggleThemeButton from './ToggleThemeButton'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const StyledBio = styled.div`
  h1 strong {
    font-family: 'Source Code Pro';
    font-weight: 600;
    letter-spacing: -.03em;
    word-spacing: -.2em;
  }

  p {
    font-weight: 500;
  }

  .tip {
    z-index: 10;
    padding-top: .6rem;
    position: absolute;
    font-family: 'Sanchez';
    font-size: 5rem;
    color: ${({ theme }) => theme.tip};
    transform: translate(-1.4rem, -1.5rem);
    mix-blend-mode: ${({ theme }) => theme.type === 'dark' ? 'screen' : 'multiply'};
    cursor: pointer;
    font-weight: 400;
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

export default function Bio({ toggleTheme }) {
  const [triggerRef, isIntersecting] = useIntersectionObserver()

  return (
    <StyledBio> 
    <h1>
      Hi, I’m 
      <strong ref={triggerRef}>
        &nbsp;DJ Drakos!
        <span className={isIntersecting ? 'tip fixed' : 'tip'}>
          *
        </span>
      </strong> 
    </h1>
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