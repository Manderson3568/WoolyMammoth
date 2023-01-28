import pokemon from "./images/PokemonTeamBuilderport.png";
import trx from "./images/trxPort.png";
import atomic from "./images/atomicPort.png";
export const projectSlides = [
  {
    heading: "Pokemon Team Builder",
    tagline: "Restful relational API",
    paragraphs: [
      "This solo project was built in week 6 of the General Assembly software engineering immersive, as a tool for competative Pokemon VCG players to plan out their pokemon build and team compilations.The main benefit of this tool was to provide instant feedback on tweaks to build changes before investing many hours of work into creating the pokemon in game.",
      "A large challenge faced in this project was how to fill the databases with 900 pokemon worth of data, plus all the attacks, items, types Etc.. This was achieved by writing a helper function that pulled data off an excel file, then pulls the missing information off the API, creating a seed data file ready to be input.",
    ],
    tech: "Ruby, Ruby on Rails, Javascript, Jquery, PokeAPI2.0, PostgreSQL,Bootstrap",
    image: `${pokemon}`,
    link: "https://pokemon-team-builder-dev.herokuapp.com/",
  },
  {
    heading: "TRX Prescription Tracker",
    tagline: "MedTech prescription organiser",
    paragraphs: [
      "This 3 person group project was built in week 9 of the General Assembly software engineering immersive. It was designed as a tool for people who are managing multiple medications. We approached this from 2 sides, giving the user a way to track current dosages and refills, as well as giving them a quick spot to note down any side effects they are getting, or their general health/concerns on any given day.",
      "We utilized the FDA medications API to allow users to find their medications (assuming they are FDA approved), and provide up to date information to the users about any side effects of their medication as listed on the documentation.",
    ],
    tech: "React.js, Firebase Firestore, Firebase Auth, FDA API, Material UI",
    image: `${trx}`,
    link: "https://trx-auth.web.app/",
  },
  {
    heading: "Atomic Academy",
    tagline: "EducationTech",
    paragraphs: [
      "This 2 person group project was built in week 12 of the General Assembly software engineering immersive. We designed this to be an educational platform for students to learn the basics of science. Using a combination of videos, images, and text students are prepared for a quiz.",
      "The entire NoSQL database was built by us, not utilizing any third part APIS for this project.",
    ],
    tech: "Vue.js, Node.js, Express Library, MongoDB, Material UI, JSON Web Tokens",
    image: `${atomic}`,
    link: "https://atomic-academy.onrender.com/",
  },
];
