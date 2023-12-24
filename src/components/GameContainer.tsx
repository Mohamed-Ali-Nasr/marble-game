"use client";

import { Controls } from "@/types";
import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Interface from "./Interface";

const GameContainer = () => {
  return (
    <KeyboardControls
      map={[
        {
          name: Controls.forward,
          keys: ["ArrowUp", "KeyW"],
        },
        {
          name: Controls.backward,
          keys: ["ArrowDown", "KeyS"],
        },
        {
          name: Controls.leftward,
          keys: ["ArrowLeft", "KeyA"],
        },
        {
          name: Controls.rightward,
          keys: ["ArrowRight", "KeyD"],
        },
        {
          name: Controls.jump,
          keys: ["Space"],
        },
      ]}
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
      >
        <Experience />
      </Canvas>
      <Interface />
    </KeyboardControls>
  );
};

export default GameContainer;
