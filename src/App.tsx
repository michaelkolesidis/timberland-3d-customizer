import { Canvas } from "@react-three/fiber";
import useStore from "./stores/store";
import Interface from "./interface/Interface";
import Experience from "./Experience";

function App() {
  const screen = useStore((state) => state.screen);

  return (
    <>
      <Interface />
      {screen !== "home" && (
        <Canvas camera={{ fov: 40, position: [0, 0, 15] }}>
          <Experience />
        </Canvas>
      )}
    </>
  );
}

export default App;
