import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import Grab from "../assets/click.jpg";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("../TDnkKx/poly.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        scale={3.5}
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}>
        <Html position={[-0.07, -0.15, 0.05]}>
          <div>
            <span style={{ fontSize: "1rem" }}></span>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload("/poly.glb");
