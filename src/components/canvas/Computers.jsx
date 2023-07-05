import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, invalidate } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader.jsx";

const Computers = ({ isMobile }) => {

  const computer = useGLTF("./mac/scene.gltf");

  const ref = useRef();

  const MS = 80;

  useEffect(() => {
    let y = 5;
    const interval = setInterval(() => {
      if(y > -3){
        ref.current.position.y = y;
        ref.current.rotation.x = Math.random() * (0.005 - (-0.005)) + (-0.005);
        invalidate();
        y = y - 0.1;
      } else {
        clearInterval(interval);
      }
    }, MS);

    return () => clearInterval(interval);
  }, [])

  return (
    <mesh>
      {/* eslint-disable react/no-unknown-property */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        ref={ref}
        object={computer.scene}
        position={isMobile ? [0, 5, 0] : [0, 5, 0]}
        scale={isMobile ? 0.1 : 0.15}
        rotation={[0, 0.8, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};


export default ComputersCanvas
