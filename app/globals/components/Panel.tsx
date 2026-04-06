import type { PanelType } from "../types/PanelType";
import styled from "@emotion/styled";
import { SpeechBubble } from "./SpeechBubble";
import { OptionsBox } from "./OptionsBox";
import { useEffect, useState } from "react";
import { useSound } from "../hooks/useSound";

export const Panel = ({
  panelBackground,
  panelForeground,
  dialogue,
  options,
  onOptionSelect,
  activity,
  handleContinue,
  playSound,
}: PanelType) => {
  const ActivityComponent = activity as React.ComponentType<any>;
  const [sound, setSound] = useState<HTMLAudioElement | undefined>();

  useSound({ sound: sound, stateToCheck: sound, loop: false });

  useEffect(() => {
    if (playSound) {
      const audio = new Audio(playSound);
      setSound(audio);
    }
  }, [playSound]);

  return (
    <PanelStyles panelBackground={panelBackground} panelForeground={panelForeground}>
      {Array.isArray(panelForeground) ? (
        <div>
          {panelForeground.map((img, index) => (
            <img key={index} src={img} alt="foreground" />
          ))}
        </div>
      ) : (
        <img src={panelForeground} alt="foreground" />
      )}
      {dialogue && <SpeechBubble id="bubble" dialogue={dialogue}></SpeechBubble>}
      {options && (
        <OptionsBox onOptionSelect={onOptionSelect} options={options}>
          <h2>Make a choice...</h2>
        </OptionsBox>
      )}
      {activity && <ActivityComponent handleContinue={handleContinue} />}
    </PanelStyles>
  );
};

const PanelStyles = styled.div<PanelType>((props) => ({
  width: "100svw",
  height: "100svh",

  backgroundImage: `url(${props.panelBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "> img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "#bubble": {
    position: "absolute",
    top: "22%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
