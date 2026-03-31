import type { PanelType } from "~/globals/types/PanelType";
import { CigActivity } from "~/pages/health/components/CigActivity";

export const panels: Record<string, PanelType> = {
  "panel-1": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-1.avif",
    dialogue: "This is actually unbelievable!",
  },
  "panel-2": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-1.avif",
    dialogue: "This is actually unbelievable!",
    options: [
      { text: "In a good way, or...?", nextPanelId: "panel-3-1" },
      { text: "Hit me; it can't be that surprising.", nextPanelId: "panel-3-2" },
    ],
  },
  "panel-3-1": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-3.avif",
    dialogue: "No, not even a little...",
    nextPanel: "panel-4",
  },
  "panel-3-2": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-2.avif",
    dialogue: "How can you be so sure?",
  },
  "panel-4": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-3.avif",
    dialogue: "So, you see, I saw an article this morning about how loneliness affects your health...",
  },
  "panel-5": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-2.avif",
    dialogue: "It's so bad, they're comparing it to smoking!",
  },
  "panel-6": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/phone.avif",
    activity: CigActivity,
  },
  "panel-7-1": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-2.avif",
    dialogue: "You'd think so, wouldn't you?",
    nextPanel: "panel-8",
  },
  "panel-7-2": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-1.avif",
    dialogue: "Yeah, you're basically correct.",
    nextPanel: "panel-8",
  },
  "panel-7-3": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-1.avif",
    dialogue: "That's actually bang on! Well done, I think",
    nextPanel: "panel-8",
  },
  "panel-7-4": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-2.avif",
    dialogue: "You might be glad to know that's a bit high...",
    nextPanel: "panel-8",
  },
  "panel-7-5": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-2.avif",
    dialogue: "You think it's a whole pack!? Don't even joke...",
    nextPanel: "panel-8",
  },
  "panel-8": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-1.avif",
    dialogue: "Yeah, it's fifteen. Fifteen! Absurd...",
  },
  "panel-9": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-2.avif",
    dialogue: "I mean, this is serious, right?",
  },
  "panel-10": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-3.avif",
    dialogue: "...",
  },
  "panel-11": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-1.avif",
    dialogue: "I mean, yeah. I smoke, but I know it's bad for me.",
  },
  "panel-12": {
    panelBackground: "/assets/scenes/health/background.avif",
    panelForeground: "/assets/scenes/health/panel 1-1.avif",
    dialogue: "Well, I need to get back to work, but I just... Yeah... How surprising!",
  },
};
