import styled from "@emotion/styled";
import { Box } from "../../../globals/components/Box";

const InfoStyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "2rem",
  width: "50svw",
  aspectRatio: "16/9",
});

const InfoStyledButton = styled.button({
  border: "none",
  backgroundColor: "transparent",
  alignSelf: "end",
  color: "var(--font-dark)",
  fontSize: "var(--fs-lg)",
  transition: "all 0.2s",
  "&:hover": {
    transform: "scale(1.1, 1.1)",
  },
  "&:active": {
    transform: "scale(0.9, 0.9)",
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
      <InfoStyledButton onClick={updateInfo}>&rarr;</InfoStyledButton>
    </InfoStyledBox>
  );
};

export default InfoBox;
