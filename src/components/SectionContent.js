import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';
import Section from './Section';

const StyledSection = styled(Section)`
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

  .mask {
    height: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0, 
    rgba(0, 0, 0, .1) ${({mask}) => mask ? mask.start : '0%'}, 
    rgba(0, 0, 0, .5) ${({mask}) => mask ? mask.end : '0%'}, 
    rgba(0, 0, 0, 1) ${({mask}) => mask ? mask.end : '0%'});
    mask-size: 100%;
    mask-position: 0 0;
    mask-repeat: no-repeat;
  }
`

export default function SectionContent({ mask, title, children, ...props }) {
  return (
    <StyledSection mask={mask} {...props}>
      { title && <h4>{title}</h4> }
      { children && 
      <div className={ mask ? 'content mask' : 'content' }>
        {children}
      </div>}
    </StyledSection>
  )
}

//2-block mask: linear-gradient(to bottom, rgba(255, 0, 0, .0), rgba(255, 0, 0, .3) calc(var(--stack-block200) / 1), rgba(0, 0, 0, 1) calc(var(--stack-block200) / 1))