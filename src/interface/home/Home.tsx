import useStore from "../../stores/store";
import "./home.css";
import WordMark from "../assets/images/wordmark.svg";
import TaglineVertical from "../assets/images/tagline_vertical.svg";
import Boot from "../assets/images/boot.png";

function Home() {
  const setScreen = useStore((state) => state.setScreen);

  return (
    <>
      <div className="home">
        <img className="wordmark" src={WordMark} />

        <div className="home-main">
          <img className="tagline-vertical" src={TaglineVertical}></img>
          <img className="boot" src={Boot} />
        </div>

        <div className="customize-button" onClick={() => setScreen("body")}>
          CUSTOMIZE
        </div>
      </div>
    </>
  );
}

export default Home;
