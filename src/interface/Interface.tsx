import useStore from "../stores/store";
import Home from "./home/Home";
import Body from "./body/Body";
import Laces from "./laces/Laces";
import Final from "./final/Final";
import "./style.css";

function Interface() {
  const screen = useStore((state) => state.screen);

  return (
    <>
      <div className="interface">
        {screen === "home" && <Home />}
        {screen === "body" && <Body />}
        {screen === "laces" && <Laces />}
        {screen === "final" && <Final />}
      </div>
    </>
  );
}

export default Interface;
