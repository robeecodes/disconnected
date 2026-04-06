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
