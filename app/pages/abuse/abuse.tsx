import { Scene } from "~/globals/components/Scene";
import { panels } from "./data/panels";
import { useSound } from "~/globals/hooks/useSound";
import { useEffect, useRef } from "react";

export default function Abuse() {
  const bgmRef = useRef<HTMLAudioElement>(new Audio("/assets/audio/scenes/abuse/background.opus"));

  useSound({ sound: bgmRef.current, loop: true });

  useEffect(() => {
    return () => {
      bgmRef.current.pause();
    };
  }, []);

  return (
    <>
      <Scene panels={panels} storyId={8}></Scene>
    </>
  );
}
