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
        {/* <div className="panel"> */}

        <div className="choices">
          <div>BODY COLOR: {color.toUpperCase()}</div>
          <div>LACE COLOR: {laces.toUpperCase()}</div>
        </div>

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
      {/* </div> */}
    </>
  );
}

export default Final;
