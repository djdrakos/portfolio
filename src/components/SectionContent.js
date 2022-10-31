import { forwardRef } from 'react';
import styled from 'styled-components';
import Section from './Section';

const StyledSection = styled(Section)`
  --top-offset: var(--header100);
  position: sticky;
  top: calc(var(--stack-block100) + var(--header100) - var(--stack-offset) - var(--section-med));
  background-color: hsla(50, 70%, 60%, .15);
  border-bottom: .1rem solid hsla(50, 70%, 60%, .01);
  border-bottom-left-radius: 1rem;

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
    margin-bottom: var(--gap100);
  }

  //TODO make invisible for prod
  .mask-helper {
    position: absolute;
    top: calc(-1 * var(--top-offset));
    width: 100%;
    height: var(--top-offset);
    background-color: ${({ theme }) => theme.background};
    border: 1px dotted #444cf7;
    opacity: 0.2;
    background-size: 5px 5px;
    background-image: repeating-linear-gradient(45deg, #444cf7 0, #444cf7 0.5px, #f4f2e6 0, #f4f2e6 50%);
  }

  .mask {
    height: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0, 
    rgba(0, 0, 0, .2) ${({ mask }) => mask ? mask : '0px'},
    rgba(0, 0, 0, 1) 13%) ${({ mask }) => mask ? mask : '0px'};
    mask-size: 100%;
    mask-position: 0 0;
    mask-repeat: no-repeat;
  }
`

const SectionContent = forwardRef(({ mask, title, children, ...props }, ref) => {
  return (
    <StyledSection mask={mask} {...props}>
      <div className='mask-helper' />
      { title && <h4>{title}</h4> }
      { children && 
      <div ref={ref} className={ mask ? `${title} content mask` : `${title} content` }>
        {children}
      </div>}
    </StyledSection>
  )
})

export default SectionContent