import { CigPack } from "./CigPack";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const CigActivityStyles = styled.div({
  aspectRatio: "9 / 16",
  width: "16rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 5,

  fontFamily: '"Gamja Flower", handwriting',
  fontSize: ".8rem",

  textAlign: "center",

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
    <CigActivityStyles>
      <h2>Loneliness is as bad as smoking how many cigarettes per day?</h2>
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
    </CigActivityStyles>
  );
};
