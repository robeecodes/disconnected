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

  borderTopLeftRadius: "155px 15px",
  borderTopRightRadius: "15px 125px",
  borderBottomRightRadius: "125px 15px",
  borderBottomLeftRadius: "15px 155px",

  border: "1rem solid var(--font-dark)",

  backgroundColor: "white",

  [`p`]: {
    fontSize: "var(--fs-md)",
  },

  [`button`]: {
    border: "none",
    backgroundColor: "transparent",

    alignSelf: "end",

    color: "var(--font-dark)",
    fontSize: "var(--fs-lg)",

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
