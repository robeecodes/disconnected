import type { PanelType } from "~/globals/types/PanelType";
import { DisconnectingActivity } from "../components/DisconnectingActivity";

export const panels: Record<string, PanelType> = {
  "panel-1": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-1.avif",
    options: [
      {
        text: "Hey, what's up?",
        nextPanelId: "panel-2-1",
      },
      {
        text: "Enjoying the view?",
        nextPanelId: "panel-2-2",
      },
    ],
  },
  "panel-2-1": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-2.avif",
    dialogue: "Nothing much, just taking some photos.",
    playSound: "/assets/audio/scenes/disconnecting/hello.opus",
    nextPanel: "panel-3",
  },
  "panel-2-2": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-2.avif",
    dialogue: "It's a lovely day, right?",
    playSound: "/assets/audio/scenes/disconnecting/hello.opus",
  },
  "panel-3": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-1.avif",
    dialogue: "I've actually been really into photography lately!",
  },
  "panel-4": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-1.avif",
    dialogue: "It's fun! Better than doomscrolling all day",
    playSound: "/assets/audio/scenes/disconnecting/yeah.opus",
  },
  "panel-5": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-1.avif",
    options: [
      {
        text: "Doomscrolling?",
        nextPanelId: "panel-6-1",
      },
      {
        text: "Oh, do you post your photos online?",
        nextPanelId: "panel-6-2",
      },
    ],
  },
  "panel-6-1": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-3.avif",
    dialogue: "Yeeeaaahhh, I used to spend, just... <em>Far</em> too much time online.",
    playSound: "/assets/audio/scenes/disconnecting/sigh.opus",
    nextPanel: "panel-7",
  },
  "panel-6-2": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-2.avif",
    dialogue: "Yes, I do! But I try to stay mostly offline these days.",
    playSound: "/assets/audio/scenes/disconnecting/yeah.opus",
  },
  "panel-7": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-1.avif",
    dialogue: "Social media’s pretty fun when I’m <em>actually</em> using it for something",
  },
  "panel-8": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-3.avif",
    dialogue: "I used to just hop online for hours when I went to bed.",
    playSound: "/assets/audio/scenes/disconnecting/sigh.opus",
  },
  "panel-9": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/phone.avif",
    activity: DisconnectingActivity,
  },
  "panel-10-1": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-2.avif",
    dialogue: "Hah! Maybe if I'd been playing lots of football that day.",
    playSound: "/assets/audio/scenes/disconnecting/haha.opus",
    nextPanel: "panel-11",
  },
  "panel-10-2": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-2.avif",
    dialogue: "Yeah, that's about right.",
    nextPanel: "panel-11",
  },
  "panel-10-3": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-3.avif",
    dialogue: "There were <em>some</em> nights like that.",
    nextPanel: "panel-11",
  },
  "panel-10-4": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-3.avif",
    dialogue: "Usually it wouldn't be <em>that</em> bad.",
  },
  "panel-11": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-3.avif",
    dialogue: "Yeah, going to sleep at 1am for a 6am start was <span class='wide'>awful.</span>",
    playSound: "/assets/audio/scenes/disconnecting/sigh.opus",
  },
  "panel-12": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-3.avif",
    dialogue: "And for what? Reading posts?",
  },
  "panel-13": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-3.avif",
    dialogue: "And I never really felt like I was a <em>part</em> of something.",
  },
  "panel-14": {
    panelBackground: "/assets/scenes/disconnecting/background.avif",
    panelForeground: "/assets/scenes/disconnecting/panel 1-2.avif",
    dialogue: "So yeah, now I just share my photos; feel free to join me for a while!",
    playSound: "/assets/audio/scenes/disconnecting/yeah.opus",
  },
};
