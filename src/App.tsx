import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import useStore from "./stores/store";
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

  return (
    <>
      {mobile ? (
        <>
          {portrait ? (
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
          ) : (
            <>
              <p>For the best experience rotate your phone.</p>
            </>
          )}
        </>
      ) : (
        <>
          <p>
            This experience is designed for mobile devices. Please use your
            mobile device to enjoy the experience.
          </p>
        </>
      )}
    </>
  );
}

export default App;
