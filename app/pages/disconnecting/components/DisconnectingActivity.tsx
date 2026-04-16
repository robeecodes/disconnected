import { useState } from "react";
import styled from "@emotion/styled";

export const DisconnectingActivity = ({ handleContinue }: { handleContinue: (panel: string) => void }) => {
  const [time, setTime] = useState(22);

  const handleIncrement = () => {
    setTime((prev) => (prev + 1) % 24);
  };

  const handleDecrement = () => {
    setTime((prev) => (prev - 1 + 24) % 24);
  };

  const getNextPanel = () => {
    if (time >= 22 && (time <= 23 || time === 0)) {
      return "panel-10-1";
    } else if (time === 1) {
      return "panel-10-2";
    } else if (time >= 2 && time <= 4) {
      return "panel-10-3";
    } else {
      return "panel-10-4";
    }
  };

  return (
    <Section>
      <h2>If I went to bed at 10pm, what time would you guess I actually got to sleep?</h2>
      <p>{time}:00</p>
      <ul>
        <li>
          <button onClick={handleDecrement}>-</button>
        </li>
        <button onClick={() => handleContinue(getNextPanel())}>Continue</button>
        <button onClick={handleIncrement}>+</button>
      </ul>
    </Section>
  );
};

const Section = styled.section({
  position: "absolute",
  height: "50svh",

  aspectRatio: "9/16",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  fontFamily: "'Gamja Flower', handwriting",

  textAlign: "center",

  h2: {
    fontSize: "var(--fs-sm)",
  },

  p: {
    fontSize: "var(--fs-xxl)",
  },

  ul: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0",
    listStyle: "none",
  },

  button: {
    padding: "1rem",
  },
});
