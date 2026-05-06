import styled from "@emotion/styled";
import { Box } from "../../../globals/components/Box";

const InfoStyledBox = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "2rem",
  width: "50svw",
  aspectRatio: "16/9",

  "@media (max-width: 40em)": {
    width: "80svw",
  },

  button: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",

    border: "none",
    backgroundColor: "transparent",
    color: "var(--font-dark)",
    fontSize: "var(--fs-lg)",
    transition: "all 0.2s",
    "&:hover": {
      transform: "scale(1.1, 1.1)",
    },
    "&:active": {
      transform: "scale(0.9, 0.9)",
    },
  },
});

export const InfoBox = ({
  updateInfo,
  children,
  id,
  width,
}: {
  updateInfo: () => void;
  children: React.ReactNode;
  id?: string;
  width?: string;
}) => {
  return (
    <InfoStyledBox id={id}>
      {children}
      <button onClick={updateInfo}>Continue &rarr;</button>
    </InfoStyledBox>
  );
};

export default InfoBox;
