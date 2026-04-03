import { useState } from "react";
import styled from "@emotion/styled";

import { useNavigate } from "react-router";

import type { PanelType } from "../types/PanelType";
import { Panel } from "./Panel";

import { ButtonBox } from "./Box";
import { useImagePrefetch } from "../hooks/useImagePrefetch";

export const Scene = ({ panels }: { panels: Record<string, PanelType> }) => {
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);

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
        navigate("/", { viewTransition: true });
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
        handleContinue={handleContinue}
      />
      {!panels[Object.keys(panels)[currentPanelIndex]].options &&
        !panels[Object.keys(panels)[currentPanelIndex]].activity && (
          <ContinueButton onClick={() => handleContinue(panels[Object.keys(panels)[currentPanelIndex]].nextPanel)}>
            Continue
          </ContinueButton>
        )}
    </>
  );
};

const ContinueButton = styled(ButtonBox)((props) => ({
  width: "min-content",
  fontFamily: "Gamja Flower",
  fontSize: "var(--fs-lg)",
  padding: ".5rem 2rem",

  background: "none",
  border: "none",
  color: "var(--font-dark)",

  img: {
    transition: "transform 0.3s ease",
  },

  ":hover": {
    img: {
      ":last-of-type": {
        transform: "translate(.25rem, .25rem)",
      },
    },
  },
}));
