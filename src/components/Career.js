import styled from 'styled-components'
import SectionContent from './SectionContent'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import {ReactComponent as GithubIcon} from '../assets/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/linkedin.svg'
import {ReactComponent as EmailIcon} from '../assets/email.svg'
import { P } from './Typography';
import breakpoints from '../styles/breakpoints';

const StyledCareer = styled(SectionContent)`
  --background-color: ${({ theme }) => theme.bg3 };
  --section-height: var(--section-med);
  --stack-block: var(--stack-block300);
  z-index: 2;
  
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
      height: 1.9rem;
      fill: ${({ theme }) => theme.color };
      -webkit-transition: all .1s ease-out;
      -moz-transition: all .1s ease-out;
      -o-transition: all .1s ease-out;
      transition: all .1s ease-out;

      .st1 {
        fill: ${({ theme }) => theme.weather };
      }
    }

    .linkedin-icon {
      height: 1.8rem;
    }

    &:hover:not(.resume) {
      border: .1em ${({ theme }) => theme.color } solid;
    }
  }

  .resume {
    font-size: larger;
    font-family: 'Source Code Pro', monospace;
    text-transform: uppercase;
  }

  ${`@media screen and ${breakpoints.medium}`} {
    --section-height: var(--section-tall);
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
    --section-height: var(--section-xtall);
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
        I eventually found my place leading a <a href="https://wholesale.eggpress.com/" rel="noreferrer" target="_blank">team</a> of tireless, brilliant humans to revive the lost craft of letterpress printing at modern industry scale. The work demanded constant learning, ingenuity and reinvention.
      </P>

      <P>
        After ten years, I was ready to hang up my apron, hand off the passwords to my hand-rolled MRP tools, and return to code. In April 2021, I enrolled in <a href="https://www.alchemycodelab.com/" target="_blank" rel="noreferrer">Alchemy Code Lab</a> to study fullstack software development, then was hired onto the instruction team after graduation.
      </P>

      <P>
        I worked across the stack as a part of the nimble team at <a href="https://kickstand.work/" target="blank" rel="noreferrer">Kickstand</a> to migrate an enterprise vendor management system from Django to Typescript, React, and Chakra.ui ahead of its international launch.
      </P>

      <P>
        I'm currently working with <a href="https://variablewest.com/" target="blank" rel="noreferrer">Variable West</a> to expand their web platform as the organization moves its primary content pipelines away from social media. 
      </P>

      <P>
        Have a project idea? Just want to chat? Get in touch! I'd love to hear from you.
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
              <LinkedInIcon className="linkedin-icon"/>
            </AccessibleIcon.Root>
          </a>
          <a className="social-icon" href="mailto:d.josi.drakos+portfolio@gmail.com?subject=I saw your portfolio, let's chat!">
            <AccessibleIcon.Root className="social-icon" label='Send an Email'>
              <EmailIcon className="email-icon"/>
            </AccessibleIcon.Root>
          </a>
        </div>
      </div>
    </StyledCareer>
  )
}

export default Career
