import { forwardRef } from 'react';
import styled from 'styled-components';
import { H4 } from './Typography'
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import breakpoints from '../styles/breakpoints';

const StyledSection = styled(GridContainer)`
  --stack-block: var(--stack-block100);
  position: sticky;

  .grid-item-title {
    justify-content: flex-end;
  }

  .title {
    position: sticky; 
    top: calc(var(--stack-start) + var(--stack-block) - var(--stack-block100));
    margin-bottom: 0;
    white-space: nowrap;
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

  @media screen and ${breakpoints.large} {
    .title {
      top: calc(var(--stack-start) + var(--stack-block) - var(--stack-block100) + .3rem);
    }
  }

  @media screen and ${breakpoints.medium} {
    .grid-item-title {
      justify-content: start;
    }

    .title {
      position: unset;
      top: unset;
      width: 100%;
      border-bottom: .1rem solid ${({ theme }) => theme.color};
    }

    .content {
      padding-top: 1rem;
      padding-left: 0;
    }
  }
`

const SectionContent = forwardRef(({ title, children, ...props }, ref) => {
  return (
    <StyledSection {...props} ref={ref}>
      <GridItem className="grid-item-title" m={3}>
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