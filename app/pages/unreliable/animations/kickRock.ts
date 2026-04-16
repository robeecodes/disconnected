import gsap from "gsap";

const tripOver = (elem: Element) => {
  gsap.to(elem, {
    duration: 0.5,
    rotation: 10,
    ease: "power1.inOut",
    delay: 0.25,
  });
};

const rockFly = (elem: Element) => {
  gsap.to(elem, {
    duration: 0.5,
    rotation: 100,
    x: 400,
    y: -400,
    ease: "power1.inOut",
    delay: 0.25,
  });
};

const rockAlert = (elem: Element) => {
  const tl = gsap.timeline();
  tl.to(elem, {
    duration: 0.5,
    scale: 1.5,
    ease: "power1.inOut",
    delay: 0.25,
  });
  tl.to(elem, {
    duration: 0.5,
    scale: 1,
    ease: "elastic",
  });
};

export { tripOver, rockFly, rockAlert };
