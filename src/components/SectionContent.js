import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';
import Section from './Section';
import TextMask from './TextMask';


const StyledSection = styled(Section)`
  min-height: var(--section-short);
  padding-left: var(--gap300);
  padding-right: var(--gap150);
  display: grid;
  grid-template-columns: var(--bio-pic100) minmax(var(--bio-pic200), var(--bio-pic300));
  align-items: flex-start;
  column-gap: var(--gap100);
  background-color: hsla(80, 70%, 60%, .15);
  border-bottom: .1rem solid hsla(100, 70%, 60%, .01);
  border-bottom-left-radius: 1rem;
  position: sticky;
  top: calc(var(--stack-block100) + var(--header100) - var(--stack-offset) - var(--section-med));

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
        <TextMask/>
        {children}
      </div>}
    </StyledSection>
  )
}