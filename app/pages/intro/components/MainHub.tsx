import styled from "@emotion/styled";
import { useContext } from "react";
import { GlobalContext } from "~/contexts/GlobalContext";
import { people } from "../data/people";
import { PersonButton } from "../components/PersonButton";

export const MainHub = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const peopleToDisplay = [1, 2, 5, 6, 8];

  return (
    <Section greyFactor={100 - globalState.seenStories.length * 20}>
      <h2>Click on the people to explore their stories...</h2>
      <img src="/assets/scenes/intro/background.avif" alt="Background" />
      {people.map((item, index) =>
        !peopleToDisplay.includes(index) || globalState.seenStories.includes(index) ? null : (
          <PersonButton
            data-disabled={false}
            key={item.name}
            left={item.left}
            right={item.right}
            bottom={item.bottom}
            height={item.height}
            imgsrc={item.imgsrc}
            name={item.name}
            to={item.route ?? ""}
            viewTransition
            prefetch="viewport"
          >
            <img src={item.imgsrc} alt={item.name} />
          </PersonButton>
        ),
      )}
    </Section>
  );
};

const Section = styled.section((props) => ({
  width: "100svw",
  height: "100svh",

  position: "relative",

  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  boxShadow: "inset 0px 8px 8px #e1e6f9",

  ["> *"]: {
    filter: `grayscale(${props.greyFactor}%)`,
  },

  [" > img"]: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "auto",
    height: "100svh",
    objectFit: "fill",
    zIndex: -1,
  },

  ["h2"]: {
    fontFamily: '"Gamja Flower", handwriting',
    fontSize: "var(--font-size-xxl)",
    fontWeight: "bold",
    color: "var(--font-dark)",
    position: "absolute",
    top: "5%",
    left: "5%",
  },
}));

export default MainHub;
