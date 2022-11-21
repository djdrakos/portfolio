import styled from 'styled-components'
import SectionContent from './SectionContent'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import {ReactComponent as GithubIcon} from '../assets/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/linkedin.svg'
import {ReactComponent as EmailIcon} from '../assets/email.svg'
import { P } from './Typography';
import breakpoints from '../styles/breakpoints';

const StyledCareer = styled(SectionContent)`
  --section-height: var(--section-tall);
  --stack-block: var(--stack-block300);
  z-index: 2;
  background-color: ${({ theme }) => theme.bg3 };
  border-bottom: .05rem solid ${({ theme }) => theme.bg3 };
  border-bottom-left-radius: 1rem;
  
  .social {
    position: sticky; 
    top: calc(var(--header100) + var(--stack-block200));
    height: var(--gap100);
    display: flex; 
    flex-direction: row;
    align-items: center;
    column-gap: var(--gap50);
    margin-top: var(--gap100);
    margin-left: var(--gap150);

    .social-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
      
      svg {
        width: 1.9rem;
        fill: ${({ theme }) => theme.color };
        -webkit-transition: all .25s;
        -moz-transition: all .25s;
        -o-transition: all .25s;
        transition: all .25s;

        .st1 {
          fill: ${({ theme }) => theme.weather };
        }
      }

      &:hover:not(.resume) {
        border: .1rem ${({ theme }) => theme.color } solid;
      }
    }


    .resume {
      color: inherit;
      font-size: larger;
      font-family: 'Source Code Pro', monospace;
      font-weight: 600;
      text-transform: uppercase;
      border: .1rem solid transparent;

      :hover {
      border-bottom: .1rem ${({ theme }) => theme.color } solid;
      }
    }
  }

  @media screen and (${breakpoints.medium}) {
    .social {
      position: static;
    }
  }

`

const Career = (props) => {
  return (
    <StyledCareer {...props}>
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

      <P>
        I'm currently looking for my next fullstack opportunity with a preference toward front-end development in React.
      </P>

      <div className="social">
        <a className="resume" href="https://www.dropbox.com/s/y7i3001iydza7sf/dj-drakos-resume.pdf?dl=0" target="blank">
          Resume PDF
        </a>
        <a className="social-icon" href="https://github.com/dj-drakos" rel="noreferrer" target="_blank">
          <AccessibleIcon.Root label='Github Profile'>
            <GithubIcon />
          </AccessibleIcon.Root>
        </a>
        <a className="social-icon" href="https://www.linkedin.com/in/dj-drakos/" rel="noreferrer" target="_blank">
          <AccessibleIcon.Root className="social-icon" label='LinkedIn Profile'>
            <LinkedInIcon/>
          </AccessibleIcon.Root>
        </a>
        <a className="social-icon" href="mailto:devin.josi.drakos+portfolio@gmail.com?subject=I saw your portfolio, let's chat!">
          <AccessibleIcon.Root className="social-icon" label='Send an Email'>
            <EmailIcon/>
          </AccessibleIcon.Root>
        </a>
      </div>
    </StyledCareer>
  )
}

export default Career