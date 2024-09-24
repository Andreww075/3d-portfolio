"use client";

import React from "react";
import useScreenSize from "./hooks/use-screen-size";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
