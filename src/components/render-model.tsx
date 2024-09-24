"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const RenderModel = ({ children, className }: Props) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (window.WebGLRenderingContext) setRender(false)
    else setRender(true)
  }, []);

  return (
    <>
    {render ? (
      <Canvas
        className={clsx("w-screen h-screen -z-10 relative", className)}
        shadows={false}
        dpr={[1, 2]} 
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Environment preset="dawn" />
      </Canvas>
    ) : (
      <p className="text-gray-300 text-xl w-full hidden sm:block lg:block text-center absolute top-4 m-auto">WebGL not renderable on your device. the other portfolio features still work or you can view my <Link className="underline" href='https://nicolasportfolio-nicolas-projects-5730490e.vercel.app/'>other portfolio</Link></p>
    )}
    </> 
  )
};

export default RenderModel;
