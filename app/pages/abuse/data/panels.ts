import type { PanelType } from "~/globals/types/PanelType";
import AbuseActivity from "../components/AbuseActivity";

export const panels: Record<string, PanelType> = {
  "panel-1": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-1.avif",
    dialogue: "Oh man... More of this...",
  },
  "panel-2": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-1.avif",
    dialogue: "Oh man... More of this...",
    options: [
      { text: "Hey... You're looking kind of down; everything okay?", nextPanelId: "panel-3-1" },
      { text: "Yeah, I don't like reading comments either...", nextPanelId: "panel-3-2" },
    ],
  },
  "panel-3-1": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-2.avif",
    dialogue: "<em>Sigh...</em> Yeah, I'm fine, really, just... Yeah...",
    nextPanel: "panel-4",
    playSound: "/assets/audio/scenes/abuse/sigh.opus",
  },
  "panel-3-2": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-2.avif",
    dialogue: "<em>Sigh...</em>... No, I like reading comments, they’re just sometimes a bit... Y’know... ",
    playSound: "/assets/audio/scenes/abuse/sigh.opus",
  },
  "panel-4": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-1.avif",
    dialogue: "I’ve been feeling a bit lonely lately, so I thought I’d chat with some people online...",
  },
  "panel-5": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-2.avif",
    dialogue: "God... I get so much... <em>Crap,</em> though, you know?  Look at this!",
  },
  "panel-6": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/phone.avif",
    activity: AbuseActivity,
  },
  "panel-7": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-1.avif",
    options: [
      { text: "Yeah... That was a lot to take in...", nextPanelId: "panel-8" },
      { text: "Why put yourself through this? Is this even normal?", nextPanelId: "panel-7-2" },
    ],
  },
  "panel-7-2": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-2.avif",
    dialogue: '<em><span class="wide">Why?</span></em> What are the alternatives?',
  },
  "panel-8": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-1.avif",
    dialogue: "I just don't know what else to do...",
    playSound: "/assets/audio/scenes/abuse/sigh.opus",
  },
  "panel-9": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-1.avif",
    dialogue: "And, I mean, <em>most</em> of the messages were good, right?",
  },
  "panel-10": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-2.avif",
    dialogue: "I must just be too soft...",
  },
  "panel-11": {
    panelBackground: "/assets/scenes/abuse/background.avif",
    panelForeground: "/assets/scenes/abuse/panel 1-1.avif",
    dialogue: "...",
    playSound: "/assets/audio/scenes/abuse/sigh.opus",
  },
};
