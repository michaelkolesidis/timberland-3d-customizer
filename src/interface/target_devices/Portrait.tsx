import TaglineHorizontal from "../assets/images/tagline_horizontal.svg";
import RotatePhone from "../assets/images/rotate_phone.svg";
import "./target_devices.css";

function Portrait() {
  return (
    <>
      <div className="target-devices">
        <img className="tagline-horizontal" src={TaglineHorizontal}></img>
        <img className="rotate-phone" src={RotatePhone}></img>
        <p className="prompt-text">
          For the best experience
          <br />
          rotate your phone.
        </p>
      </div>
    </>
  );
}

export default Portrait;
