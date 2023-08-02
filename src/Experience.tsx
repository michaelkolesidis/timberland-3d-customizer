// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";
import { Boot } from "./Boot";

export default function Experience() {
//   const boot = useLoader(GLTFLoader, "/models/boot/boot.gltf");

  return (
    <>
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={-1.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      {/* <primitive
        object={boot.scene}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      /> */}
      <Boot />
    </>
  );
}
