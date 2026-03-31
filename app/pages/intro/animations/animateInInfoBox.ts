import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateInInfoBox = () => {
  gsap.set("#infoBox", {
    autoAlpha: 0,
  });

  gsap.to("#infoBox", {
    scrollTrigger: "#infoBox",
    autoAlpha: 1,
    duration: 1,
  });
};

export default animateInInfoBox;
