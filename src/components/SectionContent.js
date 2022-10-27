import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';
import Section from './Section';
// import TextMask from './TextMask';

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
    display: grid;
    grid-template-rows: auto;
    padding-top: 3rem;
  }
`

export default function SectionContent({title, children, ...props}) {
  const className = props.className ?? formatClassName(title);
  return (
    <StyledSection className={className}>
      { title && <h4>{title}</h4> }
      { children && 
      <div className='content'>
        {/* <TextMask/> */}
        {children}
      </div>}
    </StyledSection>
  )
}