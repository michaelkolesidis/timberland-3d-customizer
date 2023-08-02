import { OrbitControls } from "@react-three/drei";
import { Boot } from "./Boot";

export default function Experience() {
  return (
    <>
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={-1.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <Boot position={[-0.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
    </>
  );
}
