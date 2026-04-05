import { useState, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import styled from "@emotion/styled";

export const CigPack = ({ cigCount }: { cigCount: number }) => {
  const cigContainer = useRef<HTMLDivElement>(null);
  const cigRefs = useRef([]);
  const currentCigCount = useRef(0);

  const cigarettes = Array.from({ length: 20 }, (_, i) => (
    <img key={i} ref={(el) => (cigRefs.current[i] = el)} className="cig" src="/assets/scenes/health/cig.avif" alt="" />
  ));

  useGSAP(() => {
    if (cigCount === currentCigCount.current) return;

    let mod = cigCount > currentCigCount.current ? 1 : -1;

    if (currentCigCount.current === -1) {
      mod = 1;
    }

    const cig = mod === 1 ? cigRefs.current[cigCount - 1] : cigRefs.current[cigCount];

    const yValue: number = parseFloat(String(gsap.getProperty(cig, "top")));

    let tl = gsap.timeline();
    tl.to(cigContainer.current, { y: -10, duration: 0.25, ease: "power1.out" });
    tl.to(cigContainer.current, { y: 0, duration: 0.5, ease: "elastic" }, "box-land");
    tl.to(cig, { top: yValue - 25 * mod, duration: 1, ease: "elastic" }, "box-land");

    currentCigCount.current = cigCount;
  }, [cigCount]);

  return (
    <CigBox ref={cigContainer}>
      <img id="cigBack" src="/assets/scenes/health/cig-box-back.avif" alt="" />
      {cigarettes}
      <img id="cigFront" src="/assets/scenes/health/cig-box-front.avif" alt="" />
    </CigBox>
  );
};

const CigBox = styled.div({
  position: "relative",

  aspectRatio: "3 / 4",

  width: "60%",

  img: {
    transform: "translate(-50%, -50%)",

    "&#cigBack": {
      top: "32%",
      left: "46%",
    },
    "&#cigFront": {
      top: "70%",
      left: "50%",
      zIndex: "3",
    },

    ":not(.cig)": {
      position: "absolute",
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },

    "&.cig": {
      position: "absolute",
      width: "13%",
      height: "auto",

      "&:nth-of-type(21)": {
        top: "57%",
        left: "79%",
      },

      "&:nth-of-type(20)": {
        top: "57%",
        left: "73%",
      },

      "&:nth-of-type(19)": {
        top: "56%",
        left: "67%",
      },

      "&:nth-of-type(18)": {
        top: "56%",
        left: "59%",
      },

      "&:nth-of-type(17)": {
        top: "56%",
        left: "52%",
      },

      "&:nth-of-type(16)": {
        top: "55%",
        left: "46%",
      },

      "&:nth-of-type(15)": {
        top: "55%",
        left: "38%",
      },

      "&:nth-of-type(14)": {
        top: "55%",
        left: "30%",
      },

      "&:nth-of-type(13)": {
        top: "54% ",
        left: "24%",
      },

      "&:nth-of-type(12)": {
        top: "54%",
        left: "18%",
      },

      "&:nth-of-type(11)": {
        top: "62%",
        left: "69%",
      },

      "&:nth-of-type(10)": {
        top: "62%",
        left: "63%",
      },

      "&:nth-of-type(9)": {
        top: "61%",
        left: "57%",
      },

      "&:nth-of-type(8)": {
        top: "61%",
        left: "49%",
      },

      "&:nth-of-type(7)": {
        top: "61%",
        left: "42%",
      },

      "&:nth-of-type(6)": {
        top: "60%",
        left: "36%",
      },

      "&:nth-of-type(5)": {
        top: "60%",
        left: "28%",
      },

      "&:nth-of-type(4)": {
        top: "60%",
        left: "20%",
      },

      "&:nth-of-type(3)": {
        top: "59%",
        left: "14%",
      },

      "&:nth-of-type(2)": {
        top: "59%",
        left: "8%",
      },

      "&:nth-of-type(n):nth-of-type(-n+11)": {
        zIndex: "3",
      },
    },
  },
});
