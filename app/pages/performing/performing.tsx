import { Scene } from "../../globals/components/Scene";
import { panels } from "./data/panels";
import { FilterCam } from "./components/FilterCam";

export default function Performing() {
  return (
    <>
      <Scene panels={panels} />
      <FilterCam />
    </>
  );
}
