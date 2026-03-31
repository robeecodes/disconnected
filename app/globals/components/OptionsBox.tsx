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
            <button onClick={() => onOptionSelect(index)}>{option.text}</button>
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
});
