import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';

const StyledSection = styled.section`
  min-height: var(--section-height);
  padding-left: var(--gap300);
  padding-right: var(--gap150);
  display: grid;
  grid-template-columns: var(--bio-pic100) minmax(var(--bio-pic200), var(--bio-pic300));
  align-items: flex-start;
  column-gap: var(--gap100);
  top: calc(var(--stack-block100) + var(--header100) - var(--stack-offset) - var(--section-med));
`

export default function Section({ title, children,...props }) {
  const className = props.className ?? formatClassName(title);
  return (
    <StyledSection className={className} {...props}>
      {children}
    </StyledSection>
  )
}