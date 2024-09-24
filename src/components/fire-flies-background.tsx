"use client";

import React, { useEffect, useState } from "react";

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setFireflies((currentFireflies):any => [
        ...currentFireflies.slice(-14),
        newFirefly,
      ]);
    };

    const interval = setInterval(addFireflyPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fireflies.map((firefly: any) => {
          return (
            <div
              key={firefly.id}
              className="absolute roudned-full w-[10px] h-[10px] bg-firefly-radial"
              style={{
                top: firefly.top,
                left: firefly.left,
                animation: `move ${firefly.animationDuration} infinite alternate`,
              }}
            ></div>
          );
        })
      }
    </div>
  );
};

export default FireFliesBackground;
