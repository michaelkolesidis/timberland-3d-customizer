import useStore from "../../stores/store";
import { Color } from "../../utils/types";
import Logo from "../assets/images/logo.svg";
import WheatNuBruck from "../assets/icons/wheat_bubuck.png";
import BlackNuBruck from "../assets/icons/black_nubuck.png";
import OliveBrownNuBruck from "../assets/icons/olive_brown_nubuck.png";
import RustNuBruck from "../assets/icons/rust_nubuck.png";
import Rotate from "../assets/images/rotate.svg";
import "./body.css";

function Body() {
  const setScreen = useStore((state) => state.setScreen);
  const color = useStore((state) => state.color);
  const setColor = useStore((state) => state.setColor);

  const handleClick = (chosenColor: Color) => {
    if (color !== chosenColor) {
      setColor(chosenColor);
    }
  };

  return (
    <>
      <img className="logo" src={Logo} />
      <img className="rotate" src={Rotate} />

      <div className="panel">
        {/* Title*/}
        <div className="title">
          <p className="title-line">STEP 1:</p>
          <p className="title-line">BODY COLOR</p>
        </div>
        {/* Color Buttons */}
        <div className="color-buttons">
          <div
            className="color-button"
            onClick={() => handleClick("wheat nubuck")}
          >
            <img className="icon" src={WheatNuBruck} />
            <p className="color-button-text">Wheat Nubuck</p>
          </div>
          <div
            className="color-button"
            onClick={() => handleClick("black nubuck")}
          >
            <img className="icon" src={BlackNuBruck} />
            <p className="color-button-text">Black Nubuck</p>
          </div>
          <div
            className="color-button"
            onClick={() => handleClick("olive brown nubuck")}
          >
            <img className="icon" src={OliveBrownNuBruck} />
            <p className="color-button-text">Olive Brown Nubuck</p>
          </div>
          <div
            className="color-button"
            onClick={() => handleClick("rust nubuck")}
          >
            <img className="icon" src={RustNuBruck} />
            <p className="color-button-text">Rust{"\n"}Nubuck</p>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <div className="navigation-button" onClick={() => setScreen("home")}>
            PREVIOUS
          </div>
          <div className="navigation-button" onClick={() => setScreen("laces")}>
            NEXT
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
