import { useEffect } from "react";
import type { PanelType } from "../types/PanelType";

export const useImagePrefetch = (panels: Record<string, PanelType>, currentPanelId: number) => {
  useEffect(() => {
    const panelKeys = Object.keys(panels);

    if (currentPanelId === -1) return;

    const preloadIndices = [currentPanelId, Math.min(currentPanelId + 1, panelKeys.length - 1)];

    const imagesToPreload: string[] = [];
    preloadIndices.forEach((index) => {
      const panelId = panelKeys[index];
      const panel = panels[panelId];

      if (panel) {
        imagesToPreload.push(
          panel.panelBackground,
          ...(Array.isArray(panel.panelForeground) ? panel.panelForeground : [panel.panelForeground]),
        );
      }
    });

    const validImages = imagesToPreload.filter(Boolean) as string[];
    validImages.forEach((url) => {
      if (typeof window !== "undefined") {
        const img = new Image();
        img.src = url;
      }
    });
  }, [currentPanelId, panels]);
};
