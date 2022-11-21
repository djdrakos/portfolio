import { forwardRef } from 'react';
import styled from 'styled-components';
import { H4 } from './Typography'
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import breakpoints from '../styles/breakpoints';

const StyledSection = styled(GridContainer)`
  position: sticky;

  h2 {
    position: sticky; 
    top: calc(var(--stack-start) + var(--stack-block) - var(--stack-block100));
    margin-left: auto;
    margin-bottom: 0;
    white-space: nowrap;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    top: var(--top-offset);
    margin-bottom: var(--stack-block);
  }

  @media screen and (${breakpoints.large}) {
    h2 {
      top: calc(var(--stack-start) + var(--stack-block) - var(--stack-block100) + .3rem);
    }
  }
`

const SectionContent = forwardRef(({ title, children, ...props }, ref) => {
  return (
    <StyledSection {...props}>
      <GridItem m={3}>
        { title &&
        <H4 as="h2" className="title">
          {title}
        </H4> }
      </GridItem>
      <GridItem m={9}>
        { children && 
        <div className='content'>
          {children}
        </div> }
      </GridItem>
    </StyledSection>
  )
})

export default SectionContent