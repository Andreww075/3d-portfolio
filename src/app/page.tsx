'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import bg from "@/../public/background/home-background.png";
import RenderModel from "@/components/render-model";
import Navigation from "@/components/navigation/index";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/wizard"), {
  ssr: false,
});

export default function Home() {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (window.WebGLRenderingContext) setRender(false)
    else setRender(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        {render && (
          <RenderModel>
            <Wizard />
          </RenderModel>
        )}
      </div>
    </div>
  );
}
