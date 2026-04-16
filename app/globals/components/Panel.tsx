import type { PanelType } from "../types/PanelType";
import styled from "@emotion/styled";
import { SpeechBubble } from "./SpeechBubble";
import { OptionsBox } from "./OptionsBox";
import { useEffect, useState, useRef } from "react";
import { useSound } from "../hooks/useSound";
import { useGSAP } from "@gsap/react";

export const Panel = ({
  panelBackground,
  panelForeground,
  dialogue,
  options,
  onOptionSelect,
  activity,
  handleContinue,
  foregroundAnimation,
  playSound,
}: PanelType) => {
  const ActivityComponent = activity as React.ComponentType<any>;
  const [sound, setSound] = useState<HTMLAudioElement | undefined>();
  const containerRef = useRef<HTMLDivElement>(null);

  useSound({ sound: sound, stateToCheck: sound, loop: false });

  useEffect(() => {
    if (playSound) {
      const audio = new Audio(playSound);
      setSound(audio);
    }
  }, [playSound]);

  useGSAP(() => {
    if (Array.isArray(foregroundAnimation)) {
      foregroundAnimation.forEach((anim, idx) => {
        if (anim === null) return;
        const elem = document.querySelector(`#foreground-${idx}`);
        anim(elem);
      });
    } else if (foregroundAnimation) {
      console.log("animate");
      const elem = document.querySelector(`#foreground`)!;
      foregroundAnimation(elem);
    }
  }, [foregroundAnimation]);

  return (
    <PanelStyles ref={containerRef} panelBackground={panelBackground} panelForeground={panelForeground}>
      {Array.isArray(panelForeground) ? (
        <div id="foreground">
          {panelForeground.map((img, index) => (
            <img key={index} id={`foreground-${index}`} src={img} alt="foreground" />
          ))}
        </div>
      ) : (
        <img id="foreground" src={panelForeground} alt="foreground" />
      )}
      {dialogue && <SpeechBubble id="bubble" dialogue={dialogue}></SpeechBubble>}
      {options && (
        <OptionsBox id="options" onOptionSelect={onOptionSelect} options={options}>
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

  "#foreground": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",

    img: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },

  "#bubble": {
    position: "absolute",
    top: "22%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  "#options": {
    position: "relative",
    zIndex: 30,
  },
}));
