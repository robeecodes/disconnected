import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { Box } from "~/globals/components/Box";

export const UnreliableActivity = ({ handleContinue }: { handleContinue: () => void }) => {
  const [currentPassage, setCurrentPassage] = useState(0);
  const [hint, setHint] = useState({
    __html:
      'I was reading something about <em>"support from online friends"</em> or something? Let me know if you think you\'ve found the page!',
  });
  const passagesRef = useRef([
    {
      __html:
        "<p>Liu (2024) found that experiencing social anxiety in real life can affect online interactions and make such people feel more isolated.</p>",
    },
    {
      __html:
        "<p>Studies about social media usage and its impact on mental wellbeing often focus on teenagers, but Wang <em>et al.</em> (2020) found that adults also experience similar issues.</p>",
    },
    {
      __html:
        "<p>According to Roberts, Young and Lee (2024), many social media users overestimate the support they receive from online connections.</p>",
    },
    {
      __html:
        "<p>Faulhaber, Lee and Gentile (2023) found that limiting social media usage can help improve psychological wellbeing.</p>",
    },
  ]);

  const handleNext = () => {
    if (currentPassage === 2) {
      handleContinue();
    } else {
      setHint({
        __html:
          'I don\'t think so... I was reading something about <em>"support from online friends"</em> or something?',
      });
    }
  };

  return (
    <Section>
      <Box id="passages">
        <p dangerouslySetInnerHTML={hint}></p>
        <div id="passage" dangerouslySetInnerHTML={passagesRef.current[currentPassage]}></div>
        <ul>
          <li>
            <button
              onClick={() =>
                setCurrentPassage((currentPassage - 1 + passagesRef.current.length) % passagesRef.current.length)
              }
            >
              Previous
            </button>
          </li>
          <li>
            <button onClick={() => handleNext()}>It's this one!</button>
          </li>
          <li>
            <button onClick={() => setCurrentPassage((currentPassage + 1) % passagesRef.current.length)}>Next</button>
          </li>
        </ul>
      </Box>
    </Section>
  );
};

export default UnreliableActivity;

const Section = styled.section({
  width: "100svw",
  height: "100svh",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "#passages": {
    height: "70%",

    minWidth: "60%",

    padding: "3rem",

    "> div": {
      width: "100%",
      height: "100%",

      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",

      ["#passage"]: {
        textAlign: "center",
        marginInline: "1.5rem",
        p: {
          fontSize: "var(--fs-md)",
        },
      },
    },

    ul: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
  },
});
