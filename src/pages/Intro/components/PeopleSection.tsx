import styled from "@emotion/styled";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import ReactHtmlParser from "react-html-parser";

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
    },
    { scope: container },
  );

  const { contextSafe } = useGSAP({ scope: container });

  const updateInfo = contextSafe(() => {
    animateThroughUpdatedInfo(currentInfo, setCurrentInfo, peopleRefs);
  });

  return (
    <Section id="people" ref={container}>
      {people.map((item, index) => (
        <PersonButton
          key={index}
          left={item.left}
          top={item.top}
          disabled
          ref={(el) => {
            peopleRefs.current[index] = el;
          }}
        ></PersonButton>
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
});

export default PeopleSection;
