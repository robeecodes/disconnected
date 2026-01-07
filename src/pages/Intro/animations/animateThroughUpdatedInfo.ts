import { gsap } from "gsap";

export const animateThroughUpdatedInfo = (
  currentInfo: number,
  setCurrentInfo: React.Dispatch<React.SetStateAction<number>>,
  peopleRefs: React.RefObject<(HTMLButtonElement | null)[]>,
) => {
  if (currentInfo == 0) {
    const tl = gsap.timeline();
    tl.to("#infoBox", {
      duration: 1,
      autoAlpha: 0,
      onComplete: () => {
        setCurrentInfo(1);
      },
    });

    tl.to(peopleRefs.current[2], { duration: 0.5, autoAlpha: 0 });
    tl.to(peopleRefs.current[4], { duration: 0.5, autoAlpha: 0 });
    tl.to(peopleRefs.current[6], { duration: 0.5, autoAlpha: 0 });
    tl.to(peopleRefs.current[8], { duration: 0.5, autoAlpha: 0 });

    tl.to("#infoBox", { duration: 1, autoAlpha: 1 });
  }
};

export default animateThroughUpdatedInfo;
