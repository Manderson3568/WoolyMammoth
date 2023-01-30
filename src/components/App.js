import "../App.css";
import IntroImage from "./introImage/IntroImage";
import Navbar from "./navbar/Navbar";
import TypingTextBox from "./TypingTextBox/TypingTextBox";
import original from "./images/originalPortfolio.PNG";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <TypingTextBox />
      <IntroImage
        buttonText="Meet the original"
        image={original}
        imageAlt="Original portfolio screenshot"
      />
      <AboutMe />
      <Skills />
      <Projects />
      <StandOut />
      <Mission />
      <Convinced />
      <ImageCarousel slides={ImageSlides} />
      <Endorsements />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
