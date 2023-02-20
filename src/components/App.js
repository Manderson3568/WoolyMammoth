import "../App.css";
import Navbar from "./navbar/Navbar";
import TypingTextBox from "./TypingTextBox/TypingTextBox";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import StandOut from "./standOut/StandOut";
import Mission from "./mission/Mission";
import Convinced from "./convinced/Convinced";
import ImageCarousel from "./imageCarousel/ImageCarousel";
import { ImageSlides } from "./slideObjects";
import Endorsements from "./endorsements/Endorsements";
import Info from "./info/Info";
import Footer from "./footer/Footer";
import { useState, useEffect } from "react";
import Hobbies from "./hobbies/Hobbies";

function App() {
  const [dark, setDark] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [display, setDisplay] = useState(false);

  const checkPosition = () => {
    //nav bar location points
    if (
      Math.floor((window.scrollY / window.document.body.offsetHeight) * 100) > 6
    ) {
      setSticky(true);
    }
    if (
      Math.floor((window.scrollY / window.document.body.offsetHeight) * 100) >
      10
    ) {
      setDisplay(true);
    }
    if (
      Math.floor((window.scrollY / window.document.body.offsetHeight) * 100) <=
      6
    ) {
      setSticky(false);
      setDisplay(false);
    }

    //dark mode location points
    if (
      Math.floor((window.scrollY / window.document.body.offsetHeight) * 100) >
        15 &&
      Math.floor((window.scrollY / window.document.body.offsetHeight) * 100) <
        80
    ) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkPosition);
  }, []);
  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <Navbar sticky={sticky} display={display} dark={dark} />
      <TypingTextBox sticky={sticky} />
      <Hobbies />
      {/* <IntroImage
        buttonText="See the original"
        image={original}
        imageAlt="Original portfolio screenshot"
      /> */}
      <AboutMe />
      <Skills dark={dark} />
      <Projects dark={dark} />
      <StandOut dark={dark} />
      <Mission dark={dark} />
      <Convinced />
      <ImageCarousel slides={ImageSlides} />
      <Endorsements />
      <Info dark={dark} />
      <Footer />
    </div>
  );
}

export default App;
