import "../App.css";
import IntroImage from "./introImage/IntroImage";
import Navbar from "./navbar/Navbar";
import TypingTextBox from "./TypingTextBox/TypingTextBox";
import original from "./images/originalPortfolio.PNG";
import AboutMe from "./aboutMe/AboutMe";

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
    </div>
  );
}

export default App;
