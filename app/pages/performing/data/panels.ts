import type { PanelType } from "~/globals/types/PanelType";
import { FilterActivity } from "../components/FilterActivity";

export const panels: Record<string, PanelType> = {
  "panel-1": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-3.avif",
    dialogue: "Heyyyyy, I'm a little busy here!",
  },
  "panel-2": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-3.avif",
    dialogue: "Heyyyyy, I'm a little busy here!",
    options: [
      { text: "You don't look all that busy to me.", nextPanelId: "panel-2-2" },
      { text: "My bad, I'll come back later.", nextPanelId: "panel-3" },
    ],
  },
  "panel-2-2": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-4.avif",
    dialogue: "That's a bit rude, do you mind?",
    playSound: "/assets/audio/scenes/performing/groan.opus",
  },
  "panel-3": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-2.avif",
    dialogue: "Actually, wait! Wait, wait, this is really cool... Check this out!",
    playSound: "/assets/audio/scenes/performing/wait.opus",
  },
  "panel-4": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/phone.avif",
    dialogue: "Okay... It's not much right now, but try a filter out... People love it!",
  },
  "panel-5": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/phone.avif",
    activity: FilterActivity,
  },
  "panel-6": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-1.avif",
    dialogue: "Neat right? My online friends think I. Am. Flawless!",
  },
  "panel-7": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-1.avif",
    dialogue: "Neat right? My online friends think I. Am. Flawless!",
    options: [
      { text: "You're, uh, faking it 'til you make it?", nextPanelId: "panel-8-1" },
      { text: "Oh, like a celebrity?", nextPanelId: "panel-8-2" },
    ],
  },
  "panel-8-1": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-1.avif",
    dialogue: "Eeeeeexactly! It's great!",
  },
  "panel-8-2": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-2.avif",
    dialogue: "Yep, I'm quite the actor; very popular!",
    playSound: "/assets/audio/scenes/performing/yeah.opus",
  },
  "panel-9": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-4.avif",
    dialogue: "Although... I worry a lot. Like, what if I wear or say the wrong thing?",
    playSound: "/assets/audio/scenes/performing/embarrassed.opus",
  },
  "panel-10": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-4.avif",
    dialogue: "Although... I worry a lot. Like, what if I wear or say the wrong thing?",
    options: [
      { text: "These are your friends, right? Can you not just... Be yourself?", nextPanelId: "panel-10-2" },
      { text: "Sounds kind of lonely...", nextPanelId: "panel-11" },
    ],
  },
  "panel-10-2": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-4.avif",
    dialogue: "Absolutely not! They might not like that, or something...",
    playSound: "/assets/audio/scenes/performing/groan.opus",
  },
  "panel-11": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-3.avif",
    dialogue: "Not many people really know me, but it's not like I'm any better offline, you know?",
  },
  "panel-12": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-3.avif",
    dialogue: "It's so hard meeting new people now that I've graduated...",
  },
  "panel-13": {
    panelBackground: "/assets/scenes/performing/background.avif",
    panelForeground: "/assets/scenes/performing/panel-4.avif",
    dialogue: "Well! Anyway, like I said, I’m busy right now, do you mind?",
    playSound: "/assets/audio/scenes/performing/embarrassed.opus",
  },
};
