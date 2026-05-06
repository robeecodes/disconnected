// Based on snippet from Lucas Miranda (2020) https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258 - Refer to README

import { useEffect } from "react";
import useCanvas from "../services/useCanvas";

const Canvas = (props: { draw: Function; onCanvasRefReady: Function; mousePos: { x: number; y: number } }) => {
  const { draw, onCanvasRefReady, mousePos, ...rest } = props;
  const canvasRef = useCanvas(draw);

  useEffect(() => {
    if (onCanvasRefReady) {
      onCanvasRefReady(canvasRef);
    }
  }, [onCanvasRefReady, canvasRef]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
