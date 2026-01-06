import styled from "@emotion/styled";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const PeopleSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set("#infoBox", {
        autoAlpha: 0,
      });

      gsap.to("#infoBox", {
        scrollTrigger: "#infoBox",
        autoAlpha: 1,
        duration: 1,
      });
    },
    { scope: container },
  );

  return (
    <Section id="people" ref={container}>
      <Person left="10%" top="10%" disabled></Person>
      <Person left="15%" top="30%" disabled></Person>
      <Person left="30%" top="25%" disabled></Person>
      <Person left="20%" top="50%" disabled></Person>
      <Person left="60%" top="60%" disabled></Person>
      <Person left="70%" top="30%" disabled></Person>
      <Person left="80%" top="70%" disabled></Person>
      <Person left="50%" top="40%" disabled></Person>
      <Person left="90%" top="80%" disabled></Person>
      <Person left="75%" top="40%" disabled></Person>
      <InfoBox id="infoBox">
        <p>
          Social Media makes it easier than ever to connect with others! In this
          digital age, family, friends and even strangers are just a{" "}
          <abbr title="Direct Message">DM</abbr> away...
        </p>
        <p>So, why is it that 56% of adults struggle with loneliness?</p>
        <button>&rarr;</button>
      </InfoBox>
    </Section>
  );
};

const Section = styled.section({
  width: "100svw",
  height: "100svh",

  position: "relative",
});

const InfoBox = styled.div({
  display: "flex",
  flexDirection: "column",

  position: "absolute",

  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",

  padding: "2rem",
  width: "70svw",
  maxWidth: "100ch",

  backgroundColor: "hsla(0, 0%, 0%, 0.9)",
  backdropFilter: "blur(2px)",

  [`p`]: {
    color: "white",

    fontSize: "var(--fs-md)",
  },

  [`button`]: {
    border: "none",
    backgroundColor: "transparent",

    alignSelf: "end",

    fontSize: "var(--fs-xl)",

    color: "white",

    transition: "all .2s",

    [`:hover`]: {
      transform: "scale(1.1, 1.1)",
    },

    [`:active`]: {
      transform: "scale(0.9, 0.9)",
    },
  },
});

const Person = styled.button(
  {
    position: "absolute",

    aspectRatio: 1 / 2,
    width: "5svw",

    backgroundColor: "black",
  },
  (props) => ({
    left: props.left,
    top: props.top,
  }),
);

export default PeopleSection;
