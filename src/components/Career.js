import styled from 'styled-components'
import SectionContent from './SectionContent'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import {ReactComponent as GithubIcon} from '../assets/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/linkedin.svg'
import {ReactComponent as EmailIcon} from '../assets/email.svg'
import { P } from './Typography';
import breakpoints from '../styles/breakpoints';

const StyledCareer = styled(SectionContent)`
  --section-height: var(--section-med);
  --stack-block: var(--stack-block300);
  z-index: 2;
  background-color: ${({ theme }) => theme.bg3 };
  border-bottom: .05rem solid ${({ theme }) => theme.bg3 };
  border-bottom-left-radius: 1rem;
  
  .social {
    position: sticky; 
    top: calc(var(--header100) + var(--stack-block200));
    height: var(--gap100);
    align-self: center;
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    column-gap: var(--gap50);
  }

  .wrapper-social-icon {
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 2.9rem;
    width: 2.9rem;
    
    svg {
      width: 1.9rem;
      fill: ${({ theme }) => theme.color };
      -webkit-transition: all .1s ease-out;
      -moz-transition: all .1s ease-out;
      -o-transition: all .1s ease-out;
      transition: all .1s ease-out;

      .st1 {
        fill: ${({ theme }) => theme.weather };
      }
    }

    &:hover:not(.resume) {
      border: .1em ${({ theme }) => theme.color } solid;
    }
  }

  .resume {
    color: inherit;
    font-size: larger;
    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
    text-transform: uppercase;
    text-underline-offset: .13em;
    text-decoration-thickness: .095em;

    :hover {
      text-decoration-color: ${({ theme }) => theme.color };
      text-decoration-line: underline;
      text-decoration-skip-ink: all;
      text-decoration-thickness: .095em;
    }
  }

  ${`@media screen and ${breakpoints.medium}`} {
    .social {
      margin-top: 1rem;
      position: static;
      align-self: flex-start;
    }
  }

  ${`@media screen and ${breakpoints.small}`} {
    .social {
      margin-left: 0;
      justify-content: flex-start;
    }
  }

  ${`@media screen and ${breakpoints.xSmall}`} {
    & {
      --section-height: var(--section-tall);
    }
  }
`

const Career = (props) => {
  const TOP_OFFSET=156
  return (
    <StyledCareer topOffset={TOP_OFFSET} {...props}>
      <P>
        As a kid, I coded for fun, but didn't see a career in it. So, naturally, I went to <a href="https://pnca.willamette.edu" rel="noreferrer" target="_blank">art school</a> instead.
      </P>

      <P>
        I eventually found my place leading a <a href="https://wholesale.eggpress.com/" rel="noreferrer" target="_blank">team</a> of tireless, brilliant humans to revive the lost craft of letterpress printing at modern industry scale. The work demanded constant learning, ingenuity and reinvention. We were good at it, turning hundred-year-old machines headed to the scrap yard into the workhorses of a multi-million dollar factory.
      </P>

      <P>
        After ten years, I was ready to hang up my apron, hand off the passwords to my hand-rolled MRP tools, and return to code. 
      </P>

      <P>
        In April 2021, I enrolled in <a href="https://www.alchemycodelab.com/" target="_blank" rel="noreferrer">Alchemy Code Lab</a> to study fullstack software development, then was hired onto the instruction team after graduation.
      </P>

    {/* TODO: add current position blurb */}

      <P>
        I'm currently looking for my next opportunity with a preference toward front-end development in React.
      </P>

      <div className="social">
        <a className="resume" href="./dj-drakos-resume.pdf" target="blank">
          Resume PDF
        </a>
        <div className="wrapper-social-icon">
          <a className="social-icon" href="https://github.com/djdrakos" rel="noreferrer" target="_blank">
            <AccessibleIcon.Root className="social-icon" label='GitHub Profile'>
              <GithubIcon />
            </AccessibleIcon.Root>
          </a>
          <a className="social-icon" href="https://www.linkedin.com/in/djdrakos/" rel="noreferrer" target="_blank">
            <AccessibleIcon.Root className="social-icon" label='LinkedIn Profile'>
              <LinkedInIcon/>
            </AccessibleIcon.Root>
          </a>
          <a className="social-icon" href="mailto:d.josi.drakos+portfolio@gmail.com?subject=I saw your portfolio, let's chat!">
            <AccessibleIcon.Root className="social-icon" label='Send an Email'>
              <EmailIcon/>
            </AccessibleIcon.Root>
          </a>
        </div>
      </div>
    </StyledCareer>
  )
}

export default Career
