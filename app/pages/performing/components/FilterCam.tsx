// Reference https://codesandbox.io/p/sandbox/react-tensorflow-face-landmarks-vh6lz4?file=%2Fsrc%2FApp.js%3A99%2C5

import { useCallback, useState, useRef, useEffect } from "react";
import "@mediapipe/face_mesh";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import ReactWebcam from "react-webcam";
import styled from "@emotion/styled";
import { LikeWidget } from "./LikeWidget";

const width = "500";
const height = "600";

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

export const FilterCam = () => {
  const [keypoints, setKeypoints] = useState([]);
  const [detector, setDetector] = useState(null);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [likeRate, setLikeRate] = useState(5000);

  const [applyFilter, setApplyFilter] = useState(false);
  const catLeftEarRef = useRef<HTMLImageElement>(null);
  const catRightEarRef = useRef<HTMLImageElement>(null);

  const initDetector = useCallback(async () => {
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig = {
      runtime: "tfjs",
      solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
    };
    const detector = await faceLandmarksDetection.createDetector(model, detectorConfig);

    setDetector(detector);
  }, []);

  useEffect(() => {
    if (detector && webcamRef.current?.video) {
      setInterval(() => {
        detector
          .estimateFaces(webcamRef.current.video, {
            flipHorizontal: true,
          })
          .then(([{ keypoints } = [{ keypoints: [] }]]) => setKeypoints(keypoints));
      }, 40);
    }
  }, [detector, webcamRef]);

  useEffect(() => {
    if (webcamRef.current && webcamRef.current.video && detector === null) {
      initDetector();
    }
  }, [webcamRef]);

  useEffect(() => {
    setLikeRate(applyFilter ? 50 : 5000);
  }, [applyFilter]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    if (!applyFilter) return;
    if (canvasRef.current && keypoints && keypoints.length > 0) {
      const leftX = keypoints[103].x;
      const leftY = keypoints[103].y;
      const rightX = keypoints[332].x;
      const rightY = keypoints[332].y;

      if (!catLeftEarRef.current) {
        const catLeftEar = new Image();
        catLeftEar.src = "/assets/scenes/performing/cat-ears/cat-left.avif";
        catLeftEar.onload = () => {
          ctx.drawImage(catLeftEar, leftX - 30, leftY - 45, 60, 60);
        };
        catLeftEarRef.current = catLeftEar;
      } else {
        ctx.drawImage(catLeftEarRef.current, leftX - 30, leftY - 45, 60, 60);
      }

      if (!catRightEarRef.current) {
        const catRightEar = new Image();
        catRightEar.src = "/assets/scenes/performing/cat-ears/cat-right.avif";
        catRightEar.onload = () => {
          ctx.drawImage(catRightEar, rightX - 30, rightY - 45, 60, 60);
        };
        catRightEarRef.current = catRightEar;
      } else {
        ctx.drawImage(catRightEarRef.current, rightX - 30, rightY - 45, 60, 60);
      }

      ctx.fill();
    }
  }, [canvasRef, keypoints]);

  return (
    <FilterCamSection id="filter-cam">
      <ul>
        <li>Filters:</li>
        <li>
          <button onClick={() => setApplyFilter(!applyFilter)}>😼</button>
        </li>
      </ul>
      <CamSection>
        <ReactWebcam
          audio={false}
          ref={webcamRef}
          mirrored={true}
          width={width}
          height={height}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            clipPath: "polygon(25% 0%, 75% 0%, 75% 100%, 25% 100%)",
            pointerEvents: "none",
            width: "500px",
          }}
        />
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            clipPath: "polygon(25% 0%, 75% 0%, 75% 100%, 25% 100%)",
            pointerEvents: "none",
            width: "500px",
          }}
        />
        <LikeWidget id="like-widget" bpm={likeRate} />
      </CamSection>
    </FilterCamSection>
  );
};
