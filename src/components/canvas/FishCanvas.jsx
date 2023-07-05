import * as THREE from 'three'
import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, useGLTF } from '@react-three/drei'
import { font, videoSrc  } from "../../assets/index.js";

export default function App() {

  const ball = useRef();
  const MS = 80;
  let [y, setY] = useState(5);
  let [x, setX] = useState(0);
  let [rotate, setRotate] = useState(0);

  useEffect(() => {
    let down = true;
    const interval = setInterval(() => {
      if(down && y > -1) {
          y -= 0.1;
          setY(y);
          setRotate(rotate + 20);
      } else {
        down = false;
        if(y > 2.5) {
          down = true;
          setX(Math.random() * 2);
        }
        else {
          y = y + 0.1;
          setRotate(rotate - 20);
          setY(y);
        }
      }
    }, MS);

    return () => clearInterval(interval);
  }, [])

  return (
    <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
      <fog attach="fog" args={['pink', 15, 20]} />
      <color attach="background" args={['hotpink']} />
      <Ball ref={ball} position={[x, y, 0]} scale={[0.4, 0.4, 0.4]} rotation={[rotate, 0, 0]}/>
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <VideoText position={[0, 1.3, -2]} />
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        <Intro />
      </Suspense>
    </Canvas>
  )
}

function Ball(props) {
  const { scene } = useGLTF('/beach_ball.glb')
  return <primitive object={scene} {...props}/>
}

function VideoText(props) {
  const [video] = useState(() => {
    return Object.assign(document.createElement('video'), {
      src: videoSrc,
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true
    });
  })
  useEffect(() => void video.play(), [video])
  return (
    <Text font={font} fontSize={1.5} letterSpacing={-0.07} {...props}>
      Need a website?!
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
