import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { FilterCam } from "./FilterCam";

export const FilterActivity = ({ handleContinue }: { handleContinue: (panel: string) => void }) => {
  useGSAP(() => {
    gsap.to("#filter-cam", { autoAlpha: 1, duration: 1 });
  });
  return (
    <>
      <button
        style={{ position: "absolute", zIndex: 5, bottom: "25%" }}
        onClick={() => {
          handleContinue("panel-6");
        }}
      >
        Exit
      </button>
    </>
  );
};
