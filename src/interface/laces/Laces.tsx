import useStore from "../../stores/store";
import { Lace } from "../../utils/types";
import Logo from "../assets/images/logo.svg";
import DarkBlue from "../assets/icons/dark_blue.png";
import DarkBrown from "../assets/icons/dark_brown.png";
import LightGrey from "../assets/icons/light_grey.png";
import YellowRed from "../assets/icons/yellow_red.png";

function Laces() {
  const setScreen = useStore((state) => state.setScreen);
  const laces = useStore((state) => state.laces);
  const setLaces = useStore((state) => state.setLaces);

  const handleClick = (chosenLaces: Lace) => {
    if (laces !== chosenLaces) {
      setLaces(chosenLaces);
    }
  };

  return (
    <>
      <img className="logo" src={Logo} />
      <div className="panel">
        {/* Title*/}
        <div className="title">
          <p className="title-line">STEP 2:</p>
          <p className="title-line">UPCYCLED LACES</p>
        </div>
        {/* Color Buttons */}
        <div className="color-buttons">
          <div
            className="color-button"
            onClick={() => handleClick("dark blue")}
          >
            <img className="icon" src={DarkBlue} />
            <p className="color-button-text">Dark Blue</p>
          </div>
          <div
            className="color-button"
            onClick={() => handleClick("dark brown")}
          >
            <img className="icon" src={DarkBrown} />
            <p className="color-button-text">Dark Brown</p>
          </div>
          <div
            className="color-button"
            onClick={() => handleClick("light grey")}
          >
            <img className="icon" src={LightGrey} />
            <p className="color-button-text">Light Grey</p>
          </div>
          <div
            className="color-button"
            onClick={() => handleClick("yellow red")}
          >
            <img className="icon" src={YellowRed} />
            <p className="color-button-text">Yellow Red</p>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <div className="navigation-button" onClick={() => setScreen("body")}>
            PREVIOUS
          </div>
          <div className="navigation-button" onClick={() => setScreen("final")}>
            NEXT
          </div>
        </div>
      </div>
    </>
  );
}

export default Laces;
