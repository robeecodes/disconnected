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
      <AbuseActivityComponent>
        {view === gameViews.Gameplay && <Game onLoseLife={() => setLives(lives - 1)} currentLives={lives} />}
        {view === gameViews.Instructions && <Instructions playGame={() => setView(gameViews.Gameplay)} />}
        {view === gameViews.GameOver && <p>GAME OVER</p>}
      </AbuseActivityComponent>
    </>
  );
}

const AbuseActivityComponent = styled.div({
  position: "fixed",
  zIndex: 5,

  width: "18rem",
  height: "30rem",

  top: "51%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
