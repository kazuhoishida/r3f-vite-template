import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { StanfordBunny } from "./components"

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <StanfordBunny position={[0, -0.1, 0]} />
      <OrbitControls />
    </>
  )
}

export default function App() {
  return (
    <div id="main" className="w-full h-screen">
      <Canvas
        camera={{
          position: [0, 0, 0.3],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
