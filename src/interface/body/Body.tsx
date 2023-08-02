import useStore from "../../stores/store";
import { Color } from "../../utils/types";

function Body() {
  const color = useStore((state) => state.color);
  const setColor = useStore((state) => state.setColor);

  const handleClick = (chosenColor: Color) => {
    if (color !== chosenColor) {
      setColor(chosenColor);
    }
  };

  return (
    <>
      <p>STEP 1: BODY COLOR</p>
      <div className="color-button" onClick={() => handleClick("wheat nubuck")}>
        Wheat Nubuck
      </div>
      <div className="color-button" onClick={() => handleClick("black nubuck")}>
        Black Nubuck
      </div>
      <div
        className="color-button"
        onClick={() => handleClick("olive brown nubuck")}
      >
        Olive Brown Nubuck
      </div>
      <div className="color-button" onClick={() => handleClick("rust nubuck")}>
        Rust Nubuck
      </div>
    </>
  );
}

export default Body;
