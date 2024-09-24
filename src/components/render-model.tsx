import React, { Suspense, useState, useEffect } from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const RenderModel = ({ children, className }: Props) => {
  return (
    <>
      <Canvas
        className={clsx("w-screen h-screen -z-10 relative", className)}
        shadows={false}
        dpr={[1, 2]} 
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Environment preset="dawn" />
      </Canvas>
    </> 
  )
};

export default RenderModel;
