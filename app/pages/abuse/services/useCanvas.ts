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
