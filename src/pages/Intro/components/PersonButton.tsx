import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { Person } from "../interfaces/Person";

export const PersonButton = styled.button<Person>(
  {
    ["img"]: {
      width: "100%",
      height: "auto",
    },
  },
  (props) => css`
    position: absolute;
    height: auto;
    background-color: transparent;
    border: none;
    min-width: 8rem;
    left: ${props.left};
    bottom: ${props.bottom};
    image: ${props.img};
    name: ${props.name};
    width: ${props.width};

    transition: filter 0.3s ease-in-out;

    &:disabled {
      cursor: initial !important;
    }

    &:hover {
      cursor: pointer;

      &:not(:disabled) {
        filter: grayscale(0%) !important;

        img {
          filter: grayscale(0%) !important;
        }
      }
    }
  `,
);
