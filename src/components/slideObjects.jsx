import pokemon from "./images/PokemonTeamBuilderPort.webp";
import trx from "./images/trxPort.webp";
import atomic from "./images/atomicPort.webp";
import hiking4 from "./images/hiking4.webp";
import hiking5 from "./images/hiking5.webp";
import cooper2 from "./images/cooper2.webp";
import roro1 from "./images/roro1.webp";
import batman from "./images/batman.webp";
import mountains from "./images/mountains.webp";
import map from "./images/map.webp";
import cooper1 from "./images/cooper1.webp";
import dbz1 from "./images/dbz1.webp";
import groguUnpainted from "./images/groguUnpainted.webp";
import groguPainted from "./images/groguPainted.webp";
import paintedMini1 from "./images/paintedMini1.webp";
import Linfox from "./images/Linfox.png";
import cementAus from "./images/cementAus.jpg";

export const projectSlides = [
  {
    heading: "Pokemon Team Builder",
    tagline: "Restful relational API",
    paragraphs: [
      "I developed a solo project during week 6 of the General Assembly software engineering immersive that is designed to help competitive Pokemon VGC players plan and build their Pokemon teams. One of the main benefits of this tool is that it provides instant feedback on build changes, allowing players to tweak their builds and team compositions without investing hours of work into creating the Pokemon in-game. This feature saves players time and effort and helps them optimize their builds for maximum effectiveness.",
      "I faced a significant challenge in how to fill the databases with 900 Pokemon worth of data, as well as all the attacks, items, and types associated with each Pokemon. To overcome this challenge, I wrote a helper function that pulled data from an Excel file and then used an API to fill in the missing information. This allowed me to create a seed data file that was ready to be input into the database, saving me time and effort in building the project",
    ],
    tech: "Ruby, Ruby on Rails, Javascript, Jquery, PokeAPI2.0, PostgreSQL,Bootstrap",
    image: `${pokemon}`,
    link: "https://pokemon-team-builder-dev.herokuapp.com/",
  },
  {
    heading: "TRX Prescription Tracker",
    tagline: "MedTech prescription organiser",
    paragraphs: [
      "As part of a 3-person team in week 9 of the General Assembly software engineering immersive, we developed a tool for people managing multiple medications. Our team approached the problem from two angles: tracking dosages and refills and providing a way to note down side effects or general health concerns. We collaborated closely to leverage the FDA medications API and ensure that our tool was easy to use and informative. Through our teamwork and collaboration, we were able to build a tool that helps users stay on top of their health and medication needs",
    ],
    tech: "React.js, Firebase Firestore, Firebase Auth, FDA API, Material UI",
    image: `${trx}`,
    link: "https://trx-auth.web.app/",
  },
  {
    heading: "Atomic Academy",
    tagline: "EducationTech",
    paragraphs: [
      "In week 12 of the General Assembly software engineering immersive, my classmate and I built an educational platform for students to learn the basics of science. Our platform utilizes a combination of videos, images, and text to prepare students for a quiz. We built the entire NoSQL database from scratch without relying on any third-party APIs and utilized cloud hosting to ensure our platform could handle high traffic. Additionally, we implemented JSON Web Token (JWT) authentication to ensure secure user authentication and protect sensitive student data.",
    ],
    tech: "Vue.js, Node.js, Express Library, MongoDB, Material UI, JSON Web Tokens",
    image: `${atomic}`,
    link: "https://atomic-academy.onrender.com/",
  },
];

export const ImageSlides = [
  { img: hiking4, alt: "Michael Hiking" },
  { img: cooper2, alt: "Happy Cooper" },
  { img: roro1, alt: "Michael Speaking at November Roro Sydney" },
  { img: batman, alt: "Bathman Statue" },
  { img: mountains, alt: "Drawing of a mountain range" },
  { img: map, alt: "Fanttasy Map Drawing" },
  { img: cooper1, alt: "Cooper Leaning" },
  { img: dbz1, alt: "Goku" },
  { img: groguUnpainted, alt: "Primed Groku 3d print" },
  { img: groguPainted, alt: "Painted Groku 3d print" },
  { img: hiking5, alt: "Michael Hiking" },
  { img: paintedMini1, alt: "Painted Miniature" },
];

export const endorsementText = [
  {
    name: "John Cincotta",
    title: "Supervisor at Linfox",
    text: '"Michael was a pleasure to have work for, and beside me. He was very detail oriented, with a strong dedication to safety and customer service."',
    img: Linfox,
  },
  {
    name: "Wayne Everett",
    title: "Truck Driver at Linfox",
    text: `"Michael always made sure that I could get through my workload safely, and worked closely with me when there was any issues. He was very patient when I couldn't get the tablet system working properly. It was a pleasure working for him."`,
    img: Linfox,
  },
  {
    name: "Tom Prenderghast",
    title: "NSW Sales Manager at Cement Australia",
    text: '"He was very customer focused, many times we had last minute changes, emergency deliveries or cancellations. He was always approachable and professional."',
    img: cementAus,
  },
];
