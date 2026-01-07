import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { Person } from "../interfaces/Person";

export const PersonButton = styled.button<Person>(
  (props) => css`
    position: absolute;
    aspect-ratio: 1 / 2;
    width: 5svw;
    background-color: black;
    left: ${props.left};
    top: ${props.top};
  `,
);
