import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect } from "react";

export const useSound = ({
  sound,
  loop,
  stateToCheck,
}: {
  sound: HTMLAudioElement | undefined;
  loop: boolean;
  stateToCheck?: any;
}) => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  useEffect(() => {
    if (!sound) return;

    if (globalState.audio) {
      sound.loop = loop;
      sound.play();
    } else {
      sound.pause();
    }
  }, [globalState.audio, stateToCheck]);
};
