import { OrbitControls } from "@react-three/drei";
import useStore from "./stores/store";
import Boot from "./Boot";

export default function Experience() {
  const screen = useStore((state) => state.screen);

  // Boot position
  const bootPositionX = screen === "body" || screen === "final" ? -0.6 : 0;
  const bootPositionY = 2;
  const bootPositionZ = screen === "body" ? 0 : -0.25;

  // Boot rotation
  const bootRotationX = 0;
  const bootRotationY = screen === "body" ? -Math.PI / 2 : -Math.PI;
  const bootRotationZ = 0;

  return (
    <>
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={-1.5}
        // minPolarAngle={Math.PI / 2}
        // maxPolarAngle={Math.PI / 2}
      />

      <Boot
        position={[bootPositionX, bootPositionY, bootPositionZ]}
        rotation={[bootRotationX, bootRotationY, bootRotationZ]}
      />
      {screen === "final" && (
        <Boot
          position={[bootPositionX + 2, bootPositionY, bootPositionZ]}
          rotation={[bootRotationX, bootRotationY + 0.2, bootRotationZ]}
        />
      )}
    </>
  );
}
