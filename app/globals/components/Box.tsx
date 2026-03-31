import styled from "@emotion/styled";

const StyledBox = styled.div({
  position: "relative",

  height: "auto",

  width: "min-content",

  div: {
    position: "relative",
    zIndex: 3,
  },

  ["img"]: {
    position: "absolute",

    width: "100%",
    height: "100%",
    objectFit: "fill",

    [":first-of-type"]: {
      top: "0",
      left: "0",
      zIndex: 2,
    },

    [":last-of-type"]: {
      top: "0.25rem",
      left: "0.25rem",
      zIndex: 1,
    },
  },
});

const StyledButtonBox = styled(StyledBox)((props) => ({
  position: "fixed",
  bottom: "5%",
  right: "10%",
})).withComponent("button");

export const Box = ({
  children,
  id,
  className,
  role,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  role?: string;
}) => {
  return (
    <StyledBox id={id}>
      <div className={className}>{children}</div>
      <img src="/assets/components/boxSVGs/box-front.svg" role="presentation" />
      <img src="/assets/components/boxSVGs/box-back.svg" role="presentation" />
    </StyledBox>
  );
};

export const ButtonBox = ({
  children,
  id,
  className,
  onClick,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <StyledButtonBox id={id} className={className} onClick={onClick}>
      <div className={className}>{children}</div>
      <img src="/assets/components/boxSVGs/box-front.svg" role="presentation" />
      <img src="/assets/components/boxSVGs/box-back.svg" role="presentation" />
    </StyledButtonBox>
  );
};
