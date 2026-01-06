import styled from "@emotion/styled";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import animateTitle from "../animations/animateTitle";

export const TitleSection = () => {
  const container = useRef(null);

  // TODO: FIGURE OUT WHY THIS DON'T WORK???
  // const { contextSafe } = useGSAP({ scope: container });

  // const scrollToNextSection = contextSafe(() => {
  //   gsap.to(window, { duration: 2, scrollTo: 500 });
  // });

  useGSAP(
    () => {
      animateTitle();
    },
    { scope: container },
  );

  return (
    <Section ref={container}>
      <header>
        <h1>conn/ected</h1>
        <Button /*onClick={scrollToNextSection}*/>&darr;</Button>
      </header>
    </Section>
  );
};

const Section = styled.section`
  width: 100svw;
  height: 100svh;

  position: relative;

  overflow-y: auto;
  & header {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 100svh;
    width: 100svw;

    transform-origin: center center;

    & h1,
    & div {
      font-size: var(--fs-xxxxxl);
      font-family: "Genos", sans-serif;
      text-align: center;
    }
  }
`;

const Button = styled.button({
  aspectRatio: 1 / 1.5,
  width: "2rem",

  borderRadius: "1rem",
  border: "2px solid black",

  fontSize: "var(--fs-md)",

  backgroundColor: "white",

  transition: "all .2s",

  [`:hover`]: {
    backgroundColor: "black",
    color: "white",
  },
});

export default TitleSection;
