import { Box } from "./Box";

import styled from "@emotion/styled";

export const OptionsBox = ({
  children,
  options,
  onOptionSelect,
  id,
  className,
}: {
  children: React.ReactNode;
  options: Array<Record<string, string>>;
  onOptionSelect: (optionIndex: number) => void;
  id?: string;
  className?: string;
}) => {
  return (
    <OptionsStyledBox id={id} className={className}>
      <div>{children}</div>
      <ul>
        {options.map((option, index) => (
          <li key={option.text}>
            <button onClick={() => onOptionSelect(index)}>"{option.text}"</button>
          </li>
        ))}
      </ul>
    </OptionsStyledBox>
  );
};

const OptionsStyledBox = styled(Box)({
  aspectRatio: "16/9",
  width: "50svw",

  fontFamily: '"Gamja Flower", handwriting',

  padding: "2rem",

  "@media (max-width: 40em)": {
    aspectRatio: "initial",
    width: "80svw",
    padding: "1rem",
  },

  ul: {
    listStyle: "none",
    padding: 0,
    marginTop: "2rem",
    marginLeft: "2rem",

    li: {
      marginBottom: "1rem",
      position: "relative",
    },

    button: {
      position: "relative",
      background: "none",
      border: "none",
      color: "inherit",
      fontFamily: '"Gamja Flower", handwriting',
      fontSize: "var(--fs-md)",
      cursor: "pointer",
      textAlign: "left",

      "&::before": {
        opacity: "0",
        content: '">"',
        position: "absolute",
        left: "-1em",
      },

      "&:hover::before": {
        opacity: "1",
      },
    },
  },
});
