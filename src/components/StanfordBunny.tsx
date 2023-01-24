import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

export function StanfordBunny({ ...props }) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials }: any = useGLTF("/models/stanford_bunny.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} material-color="black" />
      </group>
    </group>
  )
}

useGLTF.preload("/models/stanford_bunny.glb")
