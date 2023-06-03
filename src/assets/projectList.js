import Out1 from "../assets/Images/Outgrown1.png"
import Out2 from "../assets/Images/Outgrown2.png"
import Out3 from "../assets/Images/Outgrown3.png"

const projects = [
  {
    name: "Outgrown",
    date: "May, 2023",
    repo_link: "https://github.com/Abekomon/outgrown_fe",
    deployed_link: "https://outgrown.vercel.app/",
    screenshots: [Out1, Out2, Out3],
    desc: "App designed to allow parents of young children to trade/sell old clothes.",
    bullets: [
      "Lead a group of 7 developers, both front-end and back-end from conception to application deployment in two weeks.",
      "Collaborated across teams using multiple communication methods, including daily standups and weekly retros",
      "Primary contributions include the landing page, filtering marketplace data via GraphQL, and dynamically generating stubbed testing for Cypress"
    ],
    tech: ["React", "Apollo GraphQL"]
  },
  {
    name: "E-Spotter",
    date: "April, 2023",
    repo_link: "https://github.com/Abekomon/E-Spotter",
    deployed_link: "https://e--spotter.herokuapp.com/",
    screenshots: [],
    desc: "App that helps keep up to date with current/upcoming esports events",
    bullets: [
      "Self-directed project, built from conception to application over the course of two weeks",
      "Built in React using Router, and rigorously tested using Cypress, with an Express back end",
      "Front and back end built entirely solo"
    ],
    tech: ["React", "Express"]
  },
  {
    name: "Quizard",
    date: "March, 2023",
    repo_link: "https://github.com/Abekomon/Quizard",
    deployed_link: "https://quizard.herokuapp.com/",
    screenshots: [],
    desc: "App that helps users practice their trivia skills",
    bullets: [
      "Exploratory learning project built in React, and tested using Cypress",
      "TypeScript was self-taught from scratch to application over the course of a week",
      "Primary contributions include app structure, responsiveness, cleaning API data, and Cypress testing"
    ],
    tech: ["React", "TypeScript"]
  },
]

export { projects }