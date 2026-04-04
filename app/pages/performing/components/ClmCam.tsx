import Webcam from "react-webcam";
import { useRef, useEffect, useState } from "react";

import clm from "clmtrackr";
import { LikeWidget } from "./LikeWidget";
import styled from "@emotion/styled";

const WebcamComponent = () => <Webcam />;

const FilterCamSection = styled.div({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "250px",
  height: "390px",

  visibility: "hidden",

  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  },
});

const CamSection = styled.div({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",

  "#like-widget": {
    position: "absolute",
    right: "1rem",
    bottom: "2rem",
  },
});

export const ClmCam = () => {
  let faceTracker: tracker;
  const width = 500;
  const height = 375;
  const [positions, setPositions] = useState([]);
  const [applyFilter, setApplyFilter] = useState(false);
  const [likeRate, setLikeRate] = useState(50);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const catLeftEarRef = useRef(null);
  const catRightEarRef = useRef(null);

  const videoConstraints = {
    width: width,
    height: height,
    facingMode: "user",
  };

  useEffect(() => {
    faceTracker = new clm.tracker();
    faceTracker.init();
    faceTracker.start(webcamRef.current.video);
  }, []);

  useEffect(() => {
    if (faceTracker && webcamRef.current?.video) {
      setInterval(() => {
        setPositions(faceTracker.getCurrentPosition());
      }, 40);
    }
  }, [faceTracker, webcamRef]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    if (!applyFilter) return;
    if (canvasRef.current && positions && positions.length > 0) {
      const leftX = positions[20][0];
      const leftY = positions[20][1];
      const rightX = positions[16][0];
      const rightY = positions[16][1];

      if (!catLeftEarRef.current) {
        const catLeftEar = new Image();
        catLeftEar.src = "assets/scenes/performing/cat-ears/cat-left.avif";
        catLeftEar.onload = () => {
          ctx.drawImage(catLeftEar, leftX - 75, leftY - 100, 100, 100);
        };
        catLeftEarRef.current = catLeftEar;
      } else {
        ctx.drawImage(catLeftEarRef.current, leftX - 75, leftY - 100, 100, 100);
      }

      if (!catRightEarRef.current) {
        const catRightEar = new Image();
        catRightEar.src = "assets/scenes/performing/cat-ears/cat-right.avif";
        catRightEar.onload = () => {
          ctx.drawImage(catRightEar, rightX - 50, rightY - 100, 100, 100);
        };
        catRightEarRef.current = catRightEar;
      } else {
        ctx.drawImage(catRightEarRef.current, rightX - 50, rightY - 100, 100, 100);
      }

      ctx.fill();
    }
  }, [canvasRef, positions]);

  useEffect(() => {
    setLikeRate(applyFilter ? 50 : 5000);
  }, [applyFilter]);

  return (
    <FilterCamSection id="filter-cam">
      <ul>
        <li>Filters:</li>
        <li>
          <button onClick={() => setApplyFilter(!applyFilter)}>😼</button>
        </li>
      </ul>
      <CamSection>
        <Webcam
          ref={webcamRef}
          mirrored
          width={width}
          height={height}
          videoConstraints={videoConstraints}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            clipPath: "polygon(25% 0%, 75% 0%, 75% 100%, 25% 100%)",
            pointerEvents: "none",
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) scaleX(-1)",
            clipPath: "polygon(25% 0%, 75% 0%, 75% 100%, 25% 100%)",
            pointerEvents: "none",
            width: width,
            height: height,
          }}
        />
        <LikeWidget id="like-widget" bpm={likeRate} />
      </CamSection>
    </FilterCamSection>
  );
};
