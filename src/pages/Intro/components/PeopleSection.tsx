import styled from "@emotion/styled";

import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

import { gsap } from "gsap";

import people from "../utils/people";
import { PersonButton } from "./PersonButton";
import info from "../utils/info";
import InfoBox from "./InfoBox";
import animateInInfoBox from "../animations/animateInInfoBox";
import animateThroughUpdatedInfo from "../animations/animateThroughUpdatedInfo";

export const PeopleSection = () => {
  const [currentInfo, setCurrentInfo] = useState(0);
  const container = useRef(null);
  const peopleRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useGSAP(
    () => {
      animateInInfoBox();
      gsap.set("#people h1", {
        autoAlpha: 0,
      });
    },
    { scope: container },
  );

  const { contextSafe } = useGSAP({ scope: container });

  const updateInfo = contextSafe(() => {
    animateThroughUpdatedInfo(currentInfo, setCurrentInfo, peopleRefs);
  });

  useEffect(() => {
    if (currentInfo > info.length - 1) {
      peopleRefs.current.forEach((ref) => {
        if (ref) {
          ref.disabled = false;
        }
      });
    }
  }, [currentInfo]);

  return (
    <Section id="people" ref={container}>
      <h1>Click on the people to explore their stories...</h1>
      <img src="/disconnected/public/assets/people/bg.avif" alt="Background" />
      {people.map((item, index) => (
        <PersonButton
          key={index}
          left={item.left}
          bottom={item.bottom}
          width={item.width}
          disabled
          ref={(el) => {
            peopleRefs.current[index] = el;
          }}
        >
          <img src={item.img} alt={item.name} />
        </PersonButton>
      ))}
      <InfoBox id="infoBox">
        {ReactHtmlParser(info[currentInfo])}
        <button onClick={updateInfo}>&rarr;</button>
      </InfoBox>
    </Section>
  );
};

const Section = styled.section({
  width: "100svw",
  height: "100svh",

  position: "relative",

  overflow: "hidden",

  ["> *"]: {
    filter: "grayscale(0%)",
  },

  [" > img"]: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "auto",
    height: "100svh",
    objectFit: "fill",
    zIndex: -1,
  },

  ["h1"]: {
    fontFamily: '"Leckerli One", handwriting',
    fontSize: "var(--font-size-xxl)",
    fontWeight: "bold",
    color: "var(--font-dark)",
    position: "absolute",
    top: "5%",
    left: "5%",
  },
});

export default PeopleSection;
