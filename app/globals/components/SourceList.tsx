import styled from "@emotion/styled";

export const SourceList = ({
  id,
  ref,
  toggleSourceList,
}: {
  id: string;
  ref?: React.RefObject<HTMLDivElement> | null;
  toggleSourceList: () => void;
}) => {
  return (
    <StyledSourceList id={id} ref={ref}>
      <article>
        <button onClick={toggleSourceList}>Exit</button>
        <h2>Source List</h2>
        <p>While the stories in this project are fictional, they are all based in reality.</p>
        <p>If you're interested in delving deeper into any of the sources, click on the links below.</p>
        <ul>
          <li>
            <a href="https://datareportal.com/reports/digital-2025-sub-section-state-of-social">
              DataReportal (2025){" "}
              <em>Digital 2025: the state of social media in 2025 — DataReportal – Global Digital Insights</em>{" "}
              [online]. Available from: https://datareportal.com/reports/digital-2025-sub-section-state-of-social
              [Accessed 5 April 2026].
            </a>
          </li>
          <li>
            <a href="https://news.gallup.com/opinion/gallup/512618/almosy-quarter-world-feels-lonlely.aspx">
              Maese, E. (2023) <em>Almost a Quarter of the World Feels Lonely</em> [online]. Available from:
              https://news.gallup.com/opinion/gallup/512618/almosy-quarter-world-feels-lonlely.aspx [Accessed 8 December
              2025].
            </a>
          </li>
          <li>
            <a href="https://journals.sagepub.com/doi/10.1177/01461672241295870">
              Roberts, J.A., Young, P.D. and David, M.E. (2024) The Epidemic of Loneliness: A 9-Year Longitudinal Study
              of the Impact of Passive and Active Social Media Use on Loneliness.{" "}
              <em>Personality and Social Psychology Bulletin</em>
              [online].
            </a>
          </li>
          <li>
            <a href="https://www.who.int/publications/i/item/978240112360">
              WHO (2025) <em>From loneliness to social connection: charting a path to healthier societies.</em>{" "}
              [online]. Available from: https://www.who.int/publications/i/item/978240112360 [Accessed 18 March 2026]
            </a>
          </li>
        </ul>
      </article>
    </StyledSourceList>
  );
};

const StyledSourceList = styled.section({
  display: "none",

  position: "fixed",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  maxWidth: "100vw",
  maxHeight: "100vh",
  overflow: "hidden",
  zIndex: "50",

  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(5px)",

  article: {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "80%",
    maxWidth: "100vw",
    maxHeight: "100vh",
    overflowY: "auto",
    backgroundColor: "white",

    padding: "1rem",

    borderRadius: "0.5rem",

    button: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
    },

    h2: {
      marginBottom: "1rem",
    },
    p: {
      marginBottom: "1rem",
    },
    ul: {
      marginBottom: "1rem",
    },
    li: {
      marginBottom: "0.5rem",
      marginLeft: "1em",
    },
  },
});
