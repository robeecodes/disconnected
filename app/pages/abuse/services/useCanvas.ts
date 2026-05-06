// Based on snippet from Lucas Miranda (2020) https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258 - Refer to README

// Handles rendering the game canvas
import { useRef, useEffect } from "react";

const useCanvas = (draw: Function) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas === null) return;

    const context = canvas.getContext("2d");
    let animationFrameId: number;

    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
