import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import useStore from "./stores/store";
import Interface from "./interface/Interface";
import Experience from "./Experience";

function App() {
  const screen = useStore((state) => state.screen);

  return (
    <>
      <Interface />
      {screen !== "home" && (
        <Canvas>
          {/* Front camera */}
          {screen === "body" && (
            <PerspectiveCamera
              makeDefault
              fov={40}
              near={0.1}
              far={100}
              position={[0, 0, 15]}
            />
          )}
          {/* Top camera */}
          {screen === "laces" && (
            <PerspectiveCamera
              makeDefault
              fov={40}
              near={0.1}
              far={100}
              position={[0, 10, 0]}
            />
          )}
          <Experience />
        </Canvas>
      )}
    </>
  );
}

export default App;
