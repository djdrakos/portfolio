const projectData = [
  {
    id: 'project1',
    img: 'screenshot_local_clock.png',
    title: 'Local Clock',
    liveUrl: 'https://fem-clock-app-ten.vercel.app/',
    repoUrl: [{ label: 'github', url: 'https://github.com/djdrakos/fem-clock-app'}],
    toolkit: ['React.js', 'styled-components', 'Radix', 'Semantic HTML5', 'CSS', 'Session Storage', 'APIs: IP Geolocation, Programming Quotes, World Time'],
    description: 'A responsive, accessibility-forward React.js app that renders a dynamic UI based on the time of day. I go into more details of the development, including creating a reuseable fluid grid comporhnent and incorporating an accessible collapsible panel using Radix primitives on the repo README.'
  }, {
    id: 'project2',
    img: 'screenshot_dark_sky_observer.png',
    title: 'Dark Sky Observer',
    liveUrl: 'https://dark-sky-log.netlify.app/signup',
    repoUrl: [
      { 
        label: 'frontend',
        url: 'https://github.com/djdrakos/darksky-fe'
      }, {
        label: 'backend',
        url: 'https://github.com/djdrakos/darksky-be'
      }
    ],
    toolkit: ['React.js', 'Superagent', 'Session Storage', 'Node.js', 'Express', 'PostgreSQL', 'HTML', 'CSS', 'APIS: 7Timer, LocationIQ, NASA APOD, Le Systeme Solaire'],
    description: 'A full stack amateur astronomer app originally developed with my team in a 1 week sprint, I wanted to maintain the project. I refactored the front end to run on new major versions of React.js and React Router. On the back end, I improved testing quality and coverage, cleaned up the SQL tables, added Express router-level authentication middleware, and refactored all API routes to follow a standard controller → model → service pattern.'
  }, {
    id: 'project3',
    img: 'screenshot_advice_dice.png',
    title: 'Advice Dice',
    liveUrl: 'https://advice-dice.netlify.app/',
    repoUrl: [{ label: 'github', url: 'https://github.com/djdrakos/fem-advice-generator-app' }],
    toolkit: ['React.js', 'Semantic HTML5', 'CSS Flexbox & Grid', 'Mobile-first Workflow', 'Advice Slip API'],
    description: 'An exercise in the finer details of building a stateful UI, this React.js app renders a random quote from a third-party API. The responsive UI delivers a smooth experience through state changes and handles fetching data of unpredictable lengths.'
  }, {
    id: 'project4',
    img: 'screenshot_time_tracking_dashboard.png',
    title: 'Time Tracking Dashboard',
    liveUrl: 'https://gorgeous-griffin-5766e6.netlify.app/',
    repoUrl: [{ label: 'github', url: 'https://github.com/djdrakos/fem-time-tracking-dashboard' }],
    toolkit: ['React.js', 'JSON', 'Semantic HTML5', 'CSS Flexbox & Grid', 'Mobile-first Workflow'],
    description: 'A responsive dashboard that renders different sets of statistics from JSON data. This was a fun project to practice component composition at different breakpoints and with variable data inputs.'
  },
]

export default projectData