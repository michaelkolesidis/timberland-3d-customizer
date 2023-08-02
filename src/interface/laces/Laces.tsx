import useStore from "../../stores/store";
import { Lace } from "../../utils/types";

function Laces() {
  const laces = useStore((state) => state.laces);
  const setLaces = useStore((state) => state.setLaces);

  const handleClick = (chosenLaces: Lace) => {
    if (laces !== chosenLaces) {
      setLaces(chosenLaces);
    }
  };

  return (
    <>
      <p>STEP 2: UPCYCLED LACES</p>
      <div className="color-button" onClick={() => handleClick("dark blue")}>
        Dark Blue
      </div>
      <div className="color-button" onClick={() => handleClick("dark brown")}>
        Dark Brown
      </div>
      <div className="color-button" onClick={() => handleClick("light grey")}>
        Light Grey
      </div>
      <div className="color-button" onClick={() => handleClick("yellow red")}>
        Yellow Red
      </div>
    </>
  );
}

export default Laces;
