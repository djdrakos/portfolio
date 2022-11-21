import { forwardRef } from 'react';
import styled from 'styled-components';
import { H4 } from './Typography'
import GridContainer from './GridContainer';

const StyledSection = styled(GridContainer)`
  position: sticky;

  h2 {
    position: sticky; 
    margin-left: auto;
    margin-bottom: 0;
  }

  .content {
    height: 100%;
    display: flex; 
    flex-direction: column;
    padding-top: 3rem;
  }
`

const SectionContent = forwardRef(({ title, children, ...props }, ref) => {
  return (
    <StyledSection {...props}>
      { title && <H4 as="h2">{title}</H4> }
      { children && 
      <div className='content'>
          {children}
      </div> }
    </StyledSection>
  )
})

export default SectionContent