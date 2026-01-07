import styled from "@emotion/styled";

export const InfoBox = styled.div({
  display: "flex",
  flexDirection: "column",

  position: "absolute",

  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",

  padding: "2rem",
  width: "70svw",
  maxWidth: "100ch",

  backgroundColor: "hsla(0, 0%, 0%, 0.9)",
  backdropFilter: "blur(2px)",

  [`p`]: {
    color: "white",

    fontSize: "var(--fs-md)",
  },

  [`button`]: {
    border: "none",
    backgroundColor: "transparent",

    alignSelf: "end",

    fontSize: "var(--fs-xl)",

    color: "white",

    transition: "all .2s",

    [`:hover`]: {
      transform: "scale(1.1, 1.1)",
    },

    [`:active`]: {
      transform: "scale(0.9, 0.9)",
    },
  },
});

export default InfoBox;
