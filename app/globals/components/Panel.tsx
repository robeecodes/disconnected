import type { PanelType } from "../types/PanelType";
import styled from "@emotion/styled";
import { SpeechBubble } from "./SpeechBubble";
import { OptionsBox } from "./OptionsBox";
import { useEffect } from "react";

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

  useEffect(() => {
    const sound = playSound ? new Audio(playSound) : undefined;
    console.log(sound);
    sound?.play();
  }, []);

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
      {dialogue && <SpeechBubble id="bubble">{dialogue}</SpeechBubble>}
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
