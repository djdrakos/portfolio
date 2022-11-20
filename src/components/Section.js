import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const StyledSection = styled.section`
  min-height: var(--section-height);
  padding-left: max(var(--gap200), var(--gap300));
  padding-right: var(--gap150);
  display: grid;
  grid-template-columns: minmax(var(--gap300), var(--bio-pic100)) minmax(var(--bio-pic200), var(--bio-pic300));
  align-items: flex-start;
  column-gap: var(--gap100);
  top: calc(var(--stack-block100) + var(--header100) - var(--stack-offset) - var(--section-med));
  
  @media screen and (${breakpoints.tablet}) {
    padding-left: var(--gap150);
    column-gap: max(var(--gap50), var(--gap100));
  }
`

export default function Section({ title, children,...props }) {
  const className = props.className ?? formatClassName(title);
  return (
    <StyledSection className={className} {...props}>
      {children}
    </StyledSection>
  )
}