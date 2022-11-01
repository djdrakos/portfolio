import { forwardRef } from 'react';
import styled from 'styled-components';
import Section from './Section';

const StyledSection = styled(Section)`
  position: sticky;

  h4 {
    position: sticky; 
    margin-left: auto;
    margin-bottom: 0;
    text-transform: capitalize;
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
      { title && <h4>{title}</h4> }
      { children && 
      <div className='content'>
          {children}
      </div>}
    </StyledSection>
  )
})

export default SectionContent