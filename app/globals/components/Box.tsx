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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  left: props.left ?? "initial",
  right: props.right ?? "initial",
  bottom: props.bottom ?? "initial",
  top: props.top ?? "initial",

  zIndex: 20,

  padding: props.padding ?? ".5em 1em",

  fontSize: "var(--fs-lg)",

  img: {
    transition: "transform 0.3s ease",
  },

  ":hover": {
    img: {
      ":last-of-type": {
        transform: "translate(.25rem, .25rem)",
      },
    },
  },
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
  left,
  right,
  bottom,
  top,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: () => void;
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
}) => {
  return (
    <StyledButtonBox
      id={id}
      className={className}
      onClick={onClick}
      left={left}
      right={right}
      bottom={bottom}
      top={top}
    >
      <div className={className}>{children}</div>
      <img src="/assets/components/boxSVGs/box-front.svg" role="presentation" />
      <img src="/assets/components/boxSVGs/box-back.svg" role="presentation" />
    </StyledButtonBox>
  );
};
