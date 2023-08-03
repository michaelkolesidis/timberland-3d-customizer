import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import useStore from "./stores/store";
import Mobile from "./interface/target_devices/Mobile";
import Portrait from "./interface/target_devices/Portrait";
import Interface from "./interface/Interface";
import Experience from "./Experience";
import { isMobile } from "./utils/functions";

function App() {
  const screen = useStore((state) => state.screen);

  const mobile = isMobile();

  const [portrait, setPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    function handleOrientationChange() {
      setPortrait(window.innerHeight > window.innerWidth);
    }

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  // const canvasRef = useRef<HTMLCanvasElement>(null);

  // const handleRenderImage = () => {
  //   const dataURL = canvasRef.current?.toDataURL();
  // };

  return (
    <>
      {mobile ? (
        <>
          {portrait ? (
            <>
              <Interface />
              {screen !== "home" && (
                <Canvas
                // ref={canvasRef}
                >
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
                  {/* Side camera */}
                  {screen === "final" && (
                    <PerspectiveCamera
                      makeDefault
                      fov={40}
                      near={0.1}
                      far={100}
                      position={[-16, 2, 13]}
                    />
                  )}
                  <Experience />
                </Canvas>
              )}
            </>
          ) : (
            <Portrait />
          )}
        </>
      ) : (
        <Mobile />
      )}
    </>
  );
}

export default App;
