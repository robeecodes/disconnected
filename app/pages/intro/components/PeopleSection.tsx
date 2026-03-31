import styled from "@emotion/styled";

import { useNavigate } from "react-router";

import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";

import people from "../data/people";
import { PersonButton } from "./PersonButton";
import info from "../data/info";
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
      gsap.set("#people h2", {
        autoAlpha: 0,
      });
    },
    { scope: container },
  );

  const { contextSafe } = useGSAP({ scope: container });

  const updateInfo = contextSafe(() => {
    animateThroughUpdatedInfo(currentInfo, setCurrentInfo, peopleRefs);
  });

  const navigate = useNavigate();

  return (
    <Section id="people" ref={container}>
      <h2>Click on the people to explore their stories...</h2>
      <img src="/assets/scenes/intro/background.avif" alt="Background" />
      {people.map((item, index) => (
        <PersonButton
          disabled={currentInfo < info.length}
          key={item.name}
          left={item.left}
          right={item.right}
          bottom={item.bottom}
          height={item.height}
          img={item.img}
          name={item.name}
          route={item.route}
          ref={(el) => {
            peopleRefs.current[index] = el;
          }}
          onClick={() => item.route && navigate(item.route, { viewTransition: true })}
        >
          <img src={item.img} alt={item.name} />
        </PersonButton>
      ))}
      <InfoBox updateInfo={updateInfo} id="infoBox">
        <div id="info" dangerouslySetInnerHTML={{ __html: info[currentInfo] }} />
      </InfoBox>
    </Section>
  );
};

const Section = styled.section({
  width: "100svw",
  height: "100svh",

  position: "relative",

  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

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

  ["h2"]: {
    fontFamily: '"Gamja Flower", handwriting',
    fontSize: "var(--font-size-xxl)",
    fontWeight: "bold",
    color: "var(--font-dark)",
    position: "absolute",
    top: "5%",
    left: "5%",
  },
});

export default PeopleSection;
