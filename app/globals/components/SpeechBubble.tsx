import styled from "@emotion/styled";

const StyledSpeechBubble = styled.div((props) => ({
  maxWidth: "35ch",

  height: "auto",
  position: "fixed",

  padding: "1rem 2rem 2rem 2rem",

  aspectRatio: "16 / 9",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  minWidth: "16rem",

  textAlign: "center",

  " > div": {
    position: "relative",

    fontSize: "var(--fs-md)",

    zIndex: 3,
  },

  "> img": {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "fill",

    "&:first-of-type": {
      top: "0",
      left: "0",
      zIndex: 2,
    },
    "&:last-of-type": {
      top: "0.25rem",
      left: "0.25rem",
      zIndex: 1,
    },
  },
}));

export const SpeechBubble = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  return (
    <StyledSpeechBubble id={id}>
      <div>{children}</div>
      <img src="/assets/components/speech-bubbleSVGs/speech-front.svg" role="presentation" />
      <img src="/assets/components/speech-bubbleSVGs/speech-back.svg" role="presentation" />
    </StyledSpeechBubble>
  );
};
