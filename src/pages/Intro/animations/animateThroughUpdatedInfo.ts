import { gsap } from "gsap";
import { info } from "../utils/info";

export const animateThroughUpdatedInfo = (
  currentInfo: number,
  setCurrentInfo: React.Dispatch<React.SetStateAction<number>>,
  peopleRefs: React.RefObject<(HTMLButtonElement | null)[]>,
) => {
  if (currentInfo == 1) {
    const tl = gsap.timeline();
    tl.to("#infoBox", {
      duration: 1,
      autoAlpha: 0,
      onComplete: () => {
        setCurrentInfo(2);
      },
    });

    tl.to(peopleRefs.current[0], {
      duration: 0.75,
      autoAlpha: 0,
      onComplete: () => {
        gsap.to("#people *", { duration: 0.5, filter: "grayscale(25%)", force3D: false });
      },
    });
    tl.to(peopleRefs.current[1], {
      duration: 0.75,
      autoAlpha: 0,
      onComplete: () => {
        gsap.to("#people *", { duration: 0.5, filter: "grayscale(50%)", force3D: false });
      },
    });
    tl.to(peopleRefs.current[4], {
      duration: 0.75,
      autoAlpha: 0,
      onComplete: () => {
        gsap.to("#people *", { duration: 0.5, filter: "grayscale(75%)", force3D: false });
      },
    });
    tl.to(peopleRefs.current[8], {
      duration: 0.75,
      autoAlpha: 0,
      onComplete: () => {
        gsap.to("#people *", { duration: 0.5, filter: "grayscale(100%)", force3D: false });
      },
    });

    tl.to("#infoBox", { duration: 1, autoAlpha: 1 });
  } else {
    if (currentInfo === info.length - 1) {
      gsap.to("#infoBox", { duration: 1, autoAlpha: 0 });
      gsap.to("#people h1", {
        duration: 0.5,
        autoAlpha: 1,
      });
    }

    setCurrentInfo(currentInfo + 1);
  }
};

export default animateThroughUpdatedInfo;
