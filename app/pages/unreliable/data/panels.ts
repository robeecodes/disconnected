import type { PanelType } from "~/globals/types/PanelType";
import UnreliableActivity from "../components/UnreliableActivity";
import { rockFly, tripOver, rockAlert } from "../animations/kickRock";

export const panels: Record<string, PanelType> = {
  "panel-1": {
    panelBackground: "/assets/scenes/unreliable/background-1.avif",
    panelForeground: "/assets/scenes/unreliable/panel 1.avif",
  },
  "panel-2": {
    panelBackground: "/assets/scenes/unreliable/background-2.avif",
    panelForeground: [
      "/assets/scenes/unreliable/panel 2-foot.avif",
      "/assets/scenes/unreliable/panel 2-rock.avif",
      "/assets/scenes/unreliable/panel 2-alert.avif",
    ],
    foregroundAnimation: [(elem) => tripOver(elem), (elem) => rockFly(elem), (elem) => rockAlert(elem)],
    playSound: "/assets/audio/scenes/unreliable/impact.opus",
  },
  "panel-3": {
    panelBackground: "/assets/scenes/unreliable/background-3.avif",
    panelForeground: "/assets/scenes/unreliable/panel 3.avif",
    dialogue: "NOOOOOOOOO!!!",
    playSound: "/assets/audio/scenes/unreliable/gasp.opus",
  },
  "panel-4": {
    panelBackground: "/assets/scenes/unreliable/background-3.avif",
    panelForeground: "/assets/scenes/unreliable/panel 3.avif",
    options: [
      { text: "WOAH! Are you okay?", nextPanelId: "panel-5-1" },
      { text: "That looked painful...", nextPanelId: "panel-5-2" },
    ],
  },
  "panel-5-1": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-1.avif",
    dialogue: "Guuuyyyyyyssss, no wayyyyy, I just tripped and dropped my books 😭",
    playSound: "/assets/audio/scenes/unreliable/whatever.opus",
  },
  "panel-6-1": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-2.avif",
    dialogue: "<span class='wide'>Sigh...</span> I'm fine... I'm <em>fine.</em>",
    nextPanel: "panel-7",
  },
  "panel-5-2": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-1.avif",
    dialogue: "Guuuyyyyyyssss, no wayyyyy, I just tripped and dropped my books 😭",
  },
  "panel-6-2": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-2.avif",
    dialogue: "You're <em>so right</em> that <span class='wide'>hurt!</span>",
  },
  "panel-7": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-3.avif",
    dialogue: "Oh, and my bookmark's only fallen out!",
    playSound: "/assets/audio/scenes/unreliable/as-if.opus",
  },
  "panel-8": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-5.avif",
    dialogue: "I'm so sorry to ask, but could you help me find my spot again?",
  },
  "panel-9": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    activity: UnreliableActivity,
  },
  "panel-10": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-1.avif",
    dialogue:
      "I'm so lucky you were here. <em>These</em> guys chuckling away in the group chat sure aren't any help <small>haha...</small>",
    playSound: "/assets/audio/scenes/unreliable/as-if.opus",
  },
  "panel-11": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-1.avif",
    dialogue:
      "I'm so lucky you were here. <em>These</em> guys chuckling away in the group chat sure aren't any help <small>haha...</small>",
    options: [
      { text: "Maybe you could go shopping with your friends next time?", nextPanelId: "panel-12-1" },
      { text: "Maybe don't text and walk next time?", nextPanelId: "panel-12-2" },
    ],
  },
  "panel-12-1": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-5.avif",
    dialogue: "That's a good idea, but, you see...",
    nextPanel: "panel-13",
  },
  "panel-12-2": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-5.avif",
    dialogue: "Yeah... That wasn't my <em>finest</em> moment...",
  },
  "panel-13": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-4.avif",
    dialogue: "I actually only just moved here, so I only have online friends for now.",
    playSound: "/assets/audio/scenes/unreliable/hmm.opus",
  },
  "panel-14": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-5.avif",
    dialogue: "Of course, I love them, but at times like this...",
  },
  "panel-15": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-1.avif",
    dialogue: "Well... Not so helpful <span class='wide'>over the phone</span>, are they?",
    playSound: "/assets/audio/scenes/unreliable/whatever.opus",
  },
  "panel-16": {
    panelBackground: "/assets/scenes/unreliable/background-4.avif",
    panelForeground: "/assets/scenes/unreliable/panel 4-4.avif",
    dialogue: "It's okay, though, I'm sure I'll make some local friends soon. Thanks again!",
  },
};

export default panels;
