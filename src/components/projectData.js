const projectData = [
  {
    id: 'project1',
    img: 'screenshot_local_clock.png',
    title: 'Local Clock',
    liveUrl: 'https://fem-clock-app-ten.vercel.app/',
    repoUrl: [{ label: 'github', url: 'https://github.com/dj-drakos/fem-clock-app'}],
    toolkit: ['React.js', 'styled-components', 'Radix', 'Semantic HTML5', 'CSS', 'Session Storage', 'APIs: IP Geolocation, Programming Quotes, World Time'],
    description: 'A responsive, stateful app that displays the time local to the user\'s IP address. The UI shifts based on the time of day. I go into more details of the development, including creating a fluid grid primitive and incorporating an accessible collapsible panel on the repo README.'
  }, {
    id: 'project2',
    img: 'screenshot_dark_sky_observer.png',
    title: 'Dark Sky Observer',
    liveUrl: 'https://dark-sky-log.netlify.app/signup',
    repoUrl: [
      { 
        label: 'frontend',
        url: 'https://github.com/dj-drakos/darksky-fe'
      }, {
        label: 'backend',
        url: 'https://github.com/dj-drakos/darksky-be'
      }
    ],
    toolkit: ['React.js', 'Superagent', 'Session Storage', 'Node.js', 'Express', 'PostgreSQL', 'HTML', 'CSS', 'APIS: 7Timer, LocationIQ, NASA APOD, Le Systeme Solaire'],
    description: 'Originally developed with my team in a 1 week sprint during my software dev program, I wanted to test my skills and maintain the project. The frontend was updated to React v18 and React Router v6. On the backend, I cleaned up the SQL tables, added integration tests, Express router-level middleware to auth, and error boundaries, then refactored all API routes to follow a controller → model → service pattern.'
  }, {
    id: 'project3',
    img: 'screenshot_advice_dice.png',
    title: 'Advice Dice',
    liveUrl: 'https://advice-dice.netlify.app/',
    repoUrl: [{ label: 'github', url: 'https://github.com/dj-drakos/fem-advice-generator-app' }],
    toolkit: ['React.js', 'Semantic HTML5', 'CSS Flexbox & Grid', 'Mobile-first Workflow', 'Advice Slip API'],
    description: 'An app that fetches and renders a random quote from a third-party API. The responsive UI delivers a smooth experience through state changes when fetching data of unpredictable lengths, and the fetch uses a timeout to give the API time to refresh its cache.'
  }, {
    id: 'project4',
    img: 'screenshot_time_tracking_dashboard.png',
    title: 'Time Tracking Dashboard',
    liveUrl: 'https://gorgeous-griffin-5766e6.netlify.app/',
    repoUrl: [{ label: 'github', url: 'https://github.com/dj-drakos/fem-time-tracking-dashboard' }],
    toolkit: ['React.js', 'JSON', 'Semantic HTML5', 'CSS Flexbox & Grid', 'Mobile-first Workflow'],
    description: 'A responsive dashboard that renders different sets of statistics from JSON data. This was a fun project to practice component composition at different breakpoints and with variable data inputs.'
  },
]

export default projectData