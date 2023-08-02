import Home from "./home/Home";
import Body from "./body/Body";
import Laces from "./laces/Laces";
import Final from "./final/Final";
import "./style.css";

function Interface() {
  return (
    <>
      <div className="interface">
        <Home />
        <Body />
        <Laces />
        <Final />
      </div>
    </>
  );
}

export default Interface;
