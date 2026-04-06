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
      setMousePosition({
        x: ev.clientX - rectRef.current.left - 16,
        y: 16,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
