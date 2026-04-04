import { useContext, useEffect, useRef } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";
import PeopleSection from "./components/PeopleSection";
import TitleSection from "./components/TitleSection";
import { useSound } from "~/globals/hooks/useSound";

function Intro() {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const bgmRef = useRef<HTMLAudioElement>(new Audio("/assets/audio/scenes/intro/background.ogg"));

  useSound({ sound: bgmRef.current, loop: true });

  useEffect(() => {
    return () => {
      bgmRef.current?.pause();
    };
  }, [globalState]);

  return (
    <>
      <TitleSection></TitleSection>
      <PeopleSection></PeopleSection>
    </>
  );
}

export default Intro;
