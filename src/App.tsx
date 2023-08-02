import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {
  return (
    <>
      <Canvas camera={{ fov: 40, position: [0, 0, 20] }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
