import styled from "@emotion/styled";
import type { Person } from "../../../globals/types/Person";
import { Link } from "react-router";

export const PersonButton = styled(Link)<Person>((props) => ({
  position: "absolute",
  backgroundColor: "transparent",
  border: "none",

  left: props.left,
  right: props.right,
  bottom: props.bottom,
  height: props.height,
  name: props.name,
  route: props.route,

  transition: "filter 0.3s ease-in-out",

  "&:disabled": {
    cursor: "initial !important",
  },

  "&:hover": {
    cursor: "pointer",

    "&:not(:disabled)": {
      filter: "grayscale(0%) !important",

      img: {
        filter: "grayscale(0%) !important",
      },
    },
  },

  ["img"]: {
    height: "100%",
    width: "auto",
  },
}));
