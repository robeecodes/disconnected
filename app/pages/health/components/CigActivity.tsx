import { CigPack } from "./CigPack";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

export const CigActivity = ({ handleContinue }: { handleContinue: (panel: string) => void }) => {
  const [cigCount, setCigCount] = useState(0);

  useEffect(() => {
    setCigCount(1);
  }, []);

  const getNextPanel = () => {
    if (cigCount <= 10) {
      return "panel-7-1";
    } else if (cigCount < 15) {
      return "panel-7-2";
    } else if (cigCount === 15) {
      return "panel-7-3";
    } else if (cigCount < 20) {
      return "panel-7-4";
    } else {
      return "panel-7-5";
    }
  };

  return (
    <Section>
      <h2>
        Loneliness is as bad as smoking how many{" "}
        <span className="tooltip" tabIndex={0}>
          cigarettes
          <span className="tooltip-text">
            For reference, even smoking one cigarette per day increases the risk of heart disease (Johnson, 2018).
          </span>
        </span>{" "}
        per day?
      </h2>
      <CigPack cigCount={cigCount} />
      <ul>
        <li>
          <button onClick={() => setCigCount(cigCount > 1 ? cigCount - 1 : 1)}>-1</button>
        </li>
        <li>
          <span>{cigCount}</span>
        </li>
        <li>
          <button onClick={() => setCigCount(cigCount < 20 ? cigCount + 1 : 20)}>+1</button>
        </li>
      </ul>
      <button onClick={() => handleContinue(getNextPanel())}>Confirm</button>
    </Section>
  );
};

const Section = styled.section({
  position: "absolute",
  aspectRatio: "9 / 16",
  height: "50svh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  fontFamily: '"Gamja Flower", handwriting',

  textAlign: "center",

  h2: {
    fontSize: "var(--fs-sm)",
  },

  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    gap: "1rem",
  },

  button: {
    fontFamily: '"Gamja Flower", handwriting',
    fontSize: "2rem",
  },
});
