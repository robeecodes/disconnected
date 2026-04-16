import { useEffect, useState } from "react";
import { gameViews } from "../types/gameViews";
import styled from "@emotion/styled";

import Game from "../views/Game";
import Instructions from "../views/Instructions";

export default function AbuseActivity({ handleContinue }: { handleContinue: () => void }) {
  const [view, setView] = useState(gameViews.Instructions);
  const [lives, setLives] = useState(5);

  useEffect(() => {
    if (lives === 0) {
      setView(gameViews.GameOver);
      const timer = setTimeout(() => {
        handleContinue();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [lives]);

  return (
    <>
      <Section id="abuse-game">
        {view === gameViews.Gameplay && <Game onLoseLife={() => setLives(lives - 1)} currentLives={lives} />}
        {view === gameViews.Instructions && <Instructions playGame={() => setView(gameViews.Gameplay)} />}
        {view === gameViews.GameOver && <p>GAME OVER</p>}
      </Section>
    </>
  );
}

const Section = styled.section({
  position: "fixed",

  height: "50svh",

  aspectRatio: "9 / 16",

  top: "51%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  fontFamily: "'Gamja Flower', handwriting",

  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  ol: {
    listStylePosition: "inside",

    li: {
      marginBottom: "1em",
    },
  },
});
