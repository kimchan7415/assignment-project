/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/dog.glb -o src/components/dog.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/dog.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.character_dog.geometry} material={materials['Beige.017']} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.character_dogArmLeft.geometry} material={materials['Beige.017']} position={[0.204, 0, -0.634]} />
        <mesh geometry={nodes.character_dogArmRight.geometry} material={materials['Beige.017']} position={[-0.204, 0, -0.634]} />
        <group position={[0, 0, -0.704]}>
          <mesh geometry={nodes.Cube1339.geometry} material={materials['Beige.017']} />
          <mesh geometry={nodes.Cube1339_1.geometry} material={materials['Red.034']} />
          <mesh geometry={nodes.Cube1339_2.geometry} material={materials['Black.026']} />
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/dog.glb')
