import "./HobbiesStyles.css";
import dnd from "../images/red-dragon-dnd.webp";
import yoda from "../images/yoda.jpg";
import pokemon from "../images/pokemon.png";

import { useRef } from "react";
import Hobby from "../hobby/Hobby";
const Hobbies = ({}) => {
  const hobby = useRef();
  return (
    <div className="hobbies section">
      <Hobby
        text="Over the past three years, I have honed my skills in leading Dungeons and Dragons games for diverse groups, ranging from close friends to unfamiliar faces. This collaborative game has been instrumental in sharpening my communication, problem-solving, and conflict resolution abilities. Through facilitating engaging experiences for others, I have cultivated valuable skills that are transferable to a variety of contexts."
        heading="Dungeons & Dragons"
        image={dnd}
        ref={hobby}
      />
      <Hobby
        text="Since the release of Episode I in cinemas, I have been an avid fan of the Star Wars franchise. In fact, I watched the movie a staggering three times before it stopped playing. My love for this universe has only grown since then, as I now actively seek out and consume all forms of Star Wars media, including books, movies, TV shows, and video games. As an enthusiast of all things Star Wars, I am constantly captivated by the lightsabers and mind powers that make this universe so thrilling. While I cannot say that I have directly learned any specific skills from my passion for Star Wars, my unwavering dedication to exploring and appreciating this vast and dynamic world has fostered my sense of creativity and imagination."
        heading="Star Wars"
        image={yoda}
        ref={hobby}
      />
      <Hobby
        text="My love for Pokemon began at the young age of 10, when I received my first set of Pokemon cards. By the age of 12, I had delved into the world of Pokemon games, and have since been an avid viewer of the Pokemon shows. Despite being considered a 'kids game', this hobby has taught me a great deal. Particularly, my experience with competitive trading cards has taught me the value of staying focused on the end goal, avoiding distractions, and adhering to a clear plan. As a result, I have developed a heightened sense of strategy and determination that has helped me succeed in many other areas of my life."
        heading="Pokemon"
        image={pokemon}
        ref={hobby}
      />
    </div>
  );
};
export default Hobbies;
