import useStore from "../../stores/store";
import WordMarkTagline from "../assets/images/wordmark_with_tagline.svg";
import "./final.css";

function Final() {
  const color = useStore((state) => state.color);
  const laces = useStore((state) => state.laces);

  return (
    <>
      <div className="final">
        <img className="wordmark-tagline" src={WordMarkTagline} />

        <div className="final-bottom">
          {/* Choices */}
          <div className="choices">
            <div className="choice">
              <span className="choice-title">BODY COLOR:</span>{" "}
              {color.toUpperCase()}
            </div>
            <div className="choice">
              <span className="choice-title">LACE COLOR:</span>
              {laces.toUpperCase()}
            </div>
          </div>
          {/* Action buttons */}
          <div className="action-buttons">
            <div
              className="action-button"
              onClick={() => console.log("Download")}
            >
              DOWNLOAD
            </div>
            <div
              className="action-button"
              onClick={() => console.log("See in AR")}
            >
              SEE IN AR
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Final;
