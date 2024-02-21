import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import React from 'react';
import Shirt from './Shirts';
import Backdrop from './Backdrops';
import CameraRig from './CameraRigs';

const CanvasModul = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModul;
