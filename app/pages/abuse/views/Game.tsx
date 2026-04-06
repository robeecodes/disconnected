import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import Canvas from "../models/Canvas";

import useMousePosition from "../services/useMousePosition";
import Mail from "../models/Mail";

import { checkCollision, spawnMail } from "../controllers/GameController";
import { mailType } from "../types/mailType";

export default function GameCanvas(props: { onLoseLife: Function; currentLives: number }) {
  const [canvasRef, setCanvasRef] = useState<RefObject<HTMLCanvasElement> | null>(null);
  const [spawnInterval, setSpawnInterval] = useState(5000);

  const mails: RefObject<Array<Mail>> = useRef([]);

  const canvasSize: { width: number; height: number } = {
    width: 280,
    height: 450,
  };

  let minSpeed = 2;

  let pos: { x: number; y: number };

  useEffect(() => {
    const interval = setInterval(() => {
      spawnMail(canvasSize, minSpeed, mails.current!);
      if (spawnInterval > 100) setSpawnInterval((3 * spawnInterval) / 4);
      if (minSpeed < 5) minSpeed += 0.25;
    }, spawnInterval);

    return () => clearInterval(interval);
  }, [spawnInterval]);

  pos = useMousePosition(canvasRef);

  const binSize = { width: 48, height: 56 };

  const draw = (ctx: any) => {
    if (ctx.canvas.width !== canvasSize.width) {
      ctx.canvas.width = canvasSize.width;
      ctx.canvas.height = canvasSize.height;
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#000000";
    ctx.fillRect(pos.x, pos.y + ctx.canvas.height - 96, binSize.width, binSize.height);

    mails.current?.forEach((mail) => {
      mail.move();

      if (mail.position.y > canvasSize.height) {
        const idx: number | undefined = mails.current?.indexOf(mail);
        if (idx) mails.current?.splice(idx, 1);
        if (idx === 0) mails.current?.shift();

        if (mail.mailType === mailType.Unfriendly) {
          props.onLoseLife();
        }
      }

      ctx.fillStyle = mail.colour;
      ctx.fillRect(mail.position.x, mail.position.y, 48, 32);
      const coll = checkCollision(
        {
          width: binSize.width,
          height: binSize.height,
          x: pos.x,
          y: pos.y + ctx.canvas.height - 96,
        },
        {
          width: mail.size.width,
          height: mail.size.height,
          x: mail.position.x,
          y: mail.position.y,
        },
      );

      if (coll) {
        const idx: number | undefined = mails.current?.indexOf(mail);
        if (idx) mails.current?.splice(idx, 1);
        if (idx === 0) mails.current?.shift();

        if (mail.mailType === mailType.Friendly) {
          props.onLoseLife();
        }
      }
    });

    ctx.fill();
  };
  return (
    <>
      <p>Lives: {props.currentLives}</p>
      <Canvas draw={draw} onCanvasRefReady={setCanvasRef} mousePos={pos} />
    </>
  );
}
