import { Canvas } from "@react-three/fiber";
import Interface from "./interface/Interface";
import Experience from "./Experience";

function App() {
  return (
    <>
      <Interface />
      <Canvas camera={{ fov: 40, position: [0, 0, 20] }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
