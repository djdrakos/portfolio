import Section from './Section'

export default function Career() {
  return (
    <Section title="career">
      <p>
        As a kid, I coded for fun, but didn't see a career in it. So, naturally, I went to <a href="https://pnca.willamette.edu" rel="noreferrer" target="_blank">art school</a> instead.
      </p>

      <p>
        I led a <a href="https://wholesale.eggpress.com/" rel="noreferrer" target="_blank">team</a> of tireless, brilliant humans to revive the lost craft of letterpress printing at modern industry scale. The work demanded constant learning, ingenuity and reinvention. We were good at it, turning hundred-year-old machines headed to the scrap yard into the workhorses of a multi-million dollar factory.
      </p>

      <p>
        After ten years, I was ready to hang up my apron, hand off the passwords to my hand-rolled MRP tools, and return to code. 
      </p>

      <p>
        In April 2021, I enrolled in <a href="https://www.alchemycodelab.com/" target="_blank" rel="noreferrer">Alchemy Code Lab</a> to study fullstack software development, then was hired onto the instruction team after graduation.
      </p>
      <p>
        I'm currently looking for my next fullstack opportunity with a preference toward front-end development in React.
      </p>
      
      {/* //tooltip professional practices
      <p>
        <strong>Debugging:</strong> repairing a worn relay that connects the light beam safety guard on the paper trimmer, using a water-stained photocopy of a wiring diagram from 1967 in German.
      </p> */}




      <div className="wrapper icon">
        <a href="https://github.com/dj-drakos" rel="noreferrer" target="_blank">
          <img className="icon github" src={require('../assets/github.png')} alt="Github Profile" />
        </a>
        <a href="https://www.linkedin.com/in/dj-drakos/" rel="noreferrer" target="_blank">
          <img className="icon linkedin" src={require('../assets/linkedin.png')} alt="LinkedIn Profile" />
        </a>
        <a href="mailto:devin.josi.drakos+portfolio@gmail.com?subject=I saw your portfolio, let's chat!">
          <img className="icon email" src={require('../assets/email.png')} alt="Send an Email" />
        </a>
      </div>
      <a href="https://www.dropbox.com/s/y7i3001iydza7sf/dj-drakos-resume.pdf?dl=0" target="blank">Resume PDF</a>
    </Section>
  )
}