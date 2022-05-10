import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Controls from "./Controls";
import Model from "./Scene";

function Animation(props) {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [3, 3, 4], fov: 750 }}>
      <Controls
        autoRotate
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.5}
        rotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <pointLight intensity={1} position={[-10, -25, -10]} />
      <spotLight
        castShadow
        intensity={0.5}
        angle={Math.PI / 8}
        position={[25, 25, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Suspense fallback={null}>
        <Model position={[0, -0.25, 0]} rotation={[Math.PI / 0.5, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default Animation;
