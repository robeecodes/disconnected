import { useRef, useEffect } from "react";

import { Scene } from "../../globals/components/Scene";
import { panels } from "./data/panels";
import { useSound } from "../../globals/hooks/useSound";

export default function Health() {
  const bgmRef = useRef<HTMLAudioElement>(new Audio("/assets/audio/scenes/health/background.opus"));

  useSound({ sound: bgmRef.current, loop: true });

  useEffect(() => {
    return () => {
      bgmRef.current.pause();
    };
  }, []);

  return (
    <>
      <Scene panels={panels} storyId={6} />
    </>
  );
}
