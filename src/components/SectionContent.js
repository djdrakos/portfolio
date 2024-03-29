import styled from 'styled-components';
import { paramCase } from 'change-case';
import { H4 } from './Typography'
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import breakpoints from '../styles/breakpoints';
import useMediaQuery from '../hooks/useMediaQuery';
import { useLayoutEffect } from 'react';

const StyledSection = styled(GridContainer)`
  --background-color: none;
  --stack-block: var(--stack-block100);
  position: sticky;
  background-color: var(--background-color);
  border-bottom: .05rem solid var(--background-color);
  border-bottom-left-radius: 1rem;
  .grid-item-title {
    justify-content: flex-end;
  }

  .title {
    position: sticky; 
    top: calc(var(--stack-start) + var(--stack-block) - var(--stack-block100));
    margin-bottom: 0;
    white-space: nowrap;
    transition: all .1s;
    cursor: pointer;
    text-underline-offset: .14em;
    text-decoration-thickness: .095em;
    
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: .075em;
      text-decoration-skip-ink: auto;
    }
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-left: 1rem;
    top: var(--top-offset);
    margin-bottom: var(--stack-block);
  }

  ${`@media screen and ${breakpoints.large}`} {
    .title {
      top: calc(var(--stack-start) + var(--stack-block) - var(--stack-block100) + .25rem);
    }
  }

  ${`@media screen and ${breakpoints.medium}`} {
    .grid-item-title {
      justify-content: start;
    }

    .title {
      position: unset;
      top: unset;
      width: 100%;
      border-bottom: .1rem solid ${({ theme }) => theme.color};

      &:hover {
        cursor:  unset;
        text-decoration:none;
      }
    }

    .content {
      padding-top: 1rem;
      padding-left: 0;
    }
  }
`

const SectionContent = ({ title, topOffset, children, ...props }) => {

  const isMaxMediumScreenSize = useMediaQuery('(max-width: 56.25em)')
  const ID = `${paramCase(title)}-section-anchor`
  
  const handleScrollOnClick = (target) => {
    const doesUserPreferReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const behavior = doesUserPreferReducedMotion.matches ? 'auto' : 'smooth'
    const el = document.querySelector(`#${target}`)
    const boundingClientRect = el.getBoundingClientRect()
    const top = window.scrollY + boundingClientRect.top - topOffset
    window.scrollTo({
      behavior,
      top ,
      left: 0
    })
  }

  const handleClick = () => {
    !isMaxMediumScreenSize && handleScrollOnClick(ID)
  }

  useLayoutEffect(() => {
    const handleScrollOnFocus = (e) => {
      const boundingClientRect = e.target.getBoundingClientRect()
      const top = window.scrollY + boundingClientRect.top - topOffset
      if(boundingClientRect.top < topOffset) {
        window.scrollTo({
          behavior: 'instant',
          top,
          left: 0
        })
      }
  }
    document.addEventListener('focus', (e) => handleScrollOnFocus(e), true)

    return () => document.removeEventListener('focus', (e) => handleScrollOnFocus(e), true)
  }, [topOffset])


  return (
    <>
      <div id={ID} className="hidden"/>
      <StyledSection {...props}>
        <GridItem className="grid-item-title" m={3}>
          { title &&
            <H4 as="h2" className="title" onClick={handleClick}>
              {title}
            </H4> 
            }
        </GridItem>
        <GridItem m={9}>
          { children && 
          <div className='content'>
            {children}
          </div> }
        </GridItem>
      </StyledSection>
    </>
  )
}

export default SectionContent