import styled from "@emotion/styled";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import ReactHtmlParser from "react-html-parser";

export const PeopleSection = () => {
  const [currentInfo, setCurrentInfo] = useState(0);
  const container = useRef(null);
  const peopleRefs = useRef([]);

  const info = [
    `<p> Social Media makes it easier than ever to connect with others! In this
      digital age, family, friends and even strangers are just a
      <abbr title="Direct Message">DM</abbr> away...</p>
      <p>So, why is it that 56% of adults struggle with loneliness?</p>
      `,
    `<p>Among these adults, 16-24 year-olds are the most affected, despite being some of the biggest social media users.</p>`,
  ];

  const people = [
    {
      left: "10%",
      top: "10%",
    },
    {
      left: "15%",
      top: "30%",
    },
    {
      left: "30%",
      top: "25%",
    },
    {
      left: "20%",
      top: "50%",
    },
    {
      left: "60%",
      top: "60%",
    },
    {
      left: "70%",
      top: "30%",
    },
    {
      left: "80%",
      top: "70%",
    },
    {
      left: "50%",
      top: "40%",
    },
    {
      left: "90%",
      top: "80%",
    },
    {
      left: "75%",
      top: "40%",
    },
  ];

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

  const { contextSafe } = useGSAP({ scope: container });

  const updateInfo = contextSafe(() => {
    if (currentInfo == 0) {
      const tl = gsap.timeline();
      tl.to("#infoBox", {
        duration: 1,
        autoAlpha: 0,
        onComplete: () => {
          setCurrentInfo(1);
        },
      });
      console.log(peopleRefs);
      tl.to(peopleRefs.current[2], { duration: 0.5, autoAlpha: 0 });
      tl.to(peopleRefs.current[4], { duration: 0.5, autoAlpha: 0 });
      tl.to(peopleRefs.current[6], { duration: 0.5, autoAlpha: 0 });
      tl.to(peopleRefs.current[8], { duration: 0.5, autoAlpha: 0 });

      tl.to("#infoBox", { duration: 1, autoAlpha: 1 });
    }
  });

  return (
    <Section id="people" ref={container}>
      {people.map((item, index) => (
        <Person
          key={index}
          left={item.left}
          top={item.top}
          disabled
          ref={(el) => {
            peopleRefs.current[index] = el;
          }}
        ></Person>
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
