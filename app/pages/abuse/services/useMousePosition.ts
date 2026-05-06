// Based on snippet from Josh Comeau (2025) https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/ - Refer to README
// Handles detection of mouse/touch for mobile

import React, { useEffect, useState } from "react";
import type { RefObject } from "react";

const useMousePosition = (canvas: RefObject<HTMLCanvasElement> | null) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const rectRef = React.useRef<DOMRect | { left: number; top: number }>({} as DOMRect | { left: number; top: number });

  if (canvas?.current) {
    const cnvRect = canvas.current.getBoundingClientRect();
    rectRef.current = cnvRect;
  } else {
    rectRef.current = { left: 0, top: 0 };
  }

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      let x, y;

      if (ev.touches) {
        const touch = ev.touches[0];
        [x, y] = [touch.clientX - rectRef.current.left - 16, 16];
      } else {
        [x, y] = [ev.clientX - rectRef.current.left - 16, 16];
      }

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
