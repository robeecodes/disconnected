import { useState, useRef, useContext } from "react";
import { useSound } from "../hooks/useSound";

import styled from "@emotion/styled";

import { useNavigate } from "react-router";

import type { PanelType } from "../types/PanelType";
import { Panel } from "./Panel";

import { ButtonBox } from "./Box";
import { useImagePrefetch } from "../hooks/useImagePrefetch";

import { GlobalContext } from "~/contexts/GlobalContext";

export const Scene = ({ panels, storyId }: { panels: Record<string, PanelType>; storyId: number }) => {
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const buttonSFXRef = useRef<HTMLAudioElement>(new Audio("/assets/audio/page-flip.opus"));
  useSound({ sound: buttonSFXRef.current, loop: false, stateToCheck: currentPanelIndex });

  useImagePrefetch(panels, currentPanelIndex);

  const navigate = useNavigate();

  const handleContinue = (panelId?: string) => {
    if (panelId) {
      const index: number = Object.keys(panels).indexOf(panelId);

      if (index !== -1) {
        setCurrentPanelIndex(index);
      }
    } else {
      if (currentPanelIndex === Object.keys(panels).length - 1) {
        setGlobalState((prev) => ({ ...prev, seenStories: [...prev.seenStories, storyId] }));
        navigate("/", { viewTransition: true, replace: true });
      } else {
        setCurrentPanelIndex((prev) => (prev + 1) % Object.keys(panels).length);
      }
    }
  };

  const handleOptionSelect = (optionIndex: number) => {
    const panel = panels[Object.keys(panels)[currentPanelIndex]];
    if (panel.options && panel.options[optionIndex].nextPanelId) {
      handleContinue(panel.options[optionIndex].nextPanelId);
    }
  };

  return (
    <>
      <Panel
        panelBackground={panels[Object.keys(panels)[currentPanelIndex]].panelBackground}
        panelForeground={panels[Object.keys(panels)[currentPanelIndex]].panelForeground}
        dialogue={panels[Object.keys(panels)[currentPanelIndex]].dialogue}
        options={panels[Object.keys(panels)[currentPanelIndex]].options}
        onOptionSelect={handleOptionSelect}
        activity={panels[Object.keys(panels)[currentPanelIndex]].activity}
        playSound={panels[Object.keys(panels)[currentPanelIndex]].playSound}
        foregroundAnimation={panels[Object.keys(panels)[currentPanelIndex]].foregroundAnimation}
        handleContinue={handleContinue}
      />
      {!panels[Object.keys(panels)[currentPanelIndex]].options &&
        !panels[Object.keys(panels)[currentPanelIndex]].activity && (
          <ButtonBox
            right="10%"
            bottom="5%"
            onClick={() => handleContinue(panels[Object.keys(panels)[currentPanelIndex]].nextPanel)}
          >
            Continue
          </ButtonBox>
        )}
    </>
  );
};
