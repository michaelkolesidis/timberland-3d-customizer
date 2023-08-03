import TaglineHorizontal from "../assets/images/tagline_horizontal.svg";
import "./target_devices.css";

function Mobile() {
  return (
    <>
      <div className="target-devices">
        <img className="tagline-horizontal" src={TaglineHorizontal}></img>
        <p className="prompt-text">
          This experience is designed for mobile devices.
        </p>
        <p className="prompt-text">
          Please use your mobile device to enjoy the experience.
        </p>
      </div>
    </>
  );
}

export default Mobile;
