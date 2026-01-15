import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";

export default function animateTitle() {
  // Split the connected text into an array of characters
  const split: SplitText = SplitText.create("h1", { type: "chars" });

  // Create arrays for the left side of the / and the right side
  const leftSplit: Array<Element> = split.chars.slice(0, 4);
  const rightSplit: Array<Element> = split.chars.slice(5);

  // Initialise the / to be hidden
  gsap.set(split.chars[4], {
    autoAlpha: 0,
    width: 0,
  });

  // Initialise the heading to avoid wrapping issues on animation
  gsap.set("h1", {
    width: "auto",
    maxWidth: "unset",
  });

  // Link animation to user scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "header",
      pin: true,
      start: "center center",
      end: "+=50%",
      scrub: 1,
    },
  });

  // First, reveal the /
  tl.to(
    split.chars[4],
    {
      autoAlpha: 1,
      width: "5%",
    },
    0,
  );

  // Hide the button
  tl.to("button", { autoAlpha: 0 }, 0);

  // Then split up the title
  tl.to(leftSplit, { y: "-150%" }, 1);
  tl.to(rightSplit, { y: "-50%" }, 1);
  tl.to(split.chars[4], { y: "-200%" }, 1);
}
