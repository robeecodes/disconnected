import { gsap } from "gsap";

import { info } from "../data/info";

export const animateThroughUpdatedInfo = (
  currentInfo: number,
  setCurrentInfo: React.Dispatch<React.SetStateAction<number>>,
  peopleRefs: React.RefObject<(HTMLAnchorElement | null)[]>,
  globalState: {},
) => {
  // Animation sequence for intro people (indices 0, 1, 4, 5, 8)
  const INTRO_ANIMATION_PEOPLE = [0, 1, 4, 5, 8];
  const PEOPLE_LENGTH = INTRO_ANIMATION_PEOPLE.length; // Number of people fading out

  if (currentInfo === 0) {
    // Create timeline for the intro animation sequence
    const tl = gsap.timeline();

    // Fade out info box
    tl.to("#infoBox", {
      duration: 1,
      autoAlpha: 0,
      onComplete: () => {
        setCurrentInfo(1);
      },
    });

    // Animate each person in sequence with corresponding grayscale effect
    INTRO_ANIMATION_PEOPLE.forEach((personIndex, index) => {
      // Set up delay for sequential animation
      const delay = index * 0.25;

      tl.to(peopleRefs.current[personIndex], {
        duration: 0.25,
        autoAlpha: 0,
        delay: delay,
        onStart: () => {
          if (!globalState.audio) return;
          const sound = new Audio("/assets/audio/scenes/intro/vanish.ogg");
          sound.currentTime = 0;
          sound.play();
        },
        onComplete: () => {
          // Apply grayscale effect to the entire people section
          gsap.to("#people *:not(h2):not(#infoBox):not(#infoBox *)", {
            duration: 0.25,
            filter: `grayscale(${(100 / PEOPLE_LENGTH) * (index + 1)}%)`,
            force3D: false,
          });
        },
      });
    });

    // Fade info box back in after all animations complete
    tl.to("#infoBox", {
      duration: 1,
      autoAlpha: 1,
      delay: PEOPLE_LENGTH * 0.25,
    });
  } else {
    // Handle normal info progression
    if (currentInfo === info.length - 1) {
      gsap.to("#infoBox", { duration: 1, autoAlpha: 0 });
      gsap.to("#people h2", {
        duration: 0.5,
        autoAlpha: 1,
      });
      peopleRefs.current.forEach((person) => {
        if (person) {
          person.setAttribute("data-disabled", "false");
        }
      });
    }

    setCurrentInfo(currentInfo + 1);
  }
};

export default animateThroughUpdatedInfo;
