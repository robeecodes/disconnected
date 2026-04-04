import { Scene } from "../../globals/components/Scene";
import { panels } from "./data/panels";
import { ClmCam } from "./components/ClmCam";
import { preload } from "react-dom";

export default function Performing() {
  preload("/assets/scenes/performing/background.avif", { as: "image" });
  preload("/assets/scenes/performing/cat-ears/cat-left.avif", { as: "image" });
  preload("/assets/scenes/performing/cat-ears/cat-right.avif", { as: "image" });
  preload("/assets/scenes/phone.avif", { as: "image" });
  return (
    <>
      <Scene panels={panels} />
      <ClmCam />
    </>
  );
}
