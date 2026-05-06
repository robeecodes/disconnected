import styled from "@emotion/styled";
import { Box } from "~/globals/components/Box";

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
      <Box id="sources">
        <article>
          <button onClick={toggleSourceList}>Exit</button>
          <h2>Source List</h2>
          <p>While the stories in this project are fictional, they are all based in reality.</p>
          <p>If you're interested in delving deeper into any of the sources, click on the links below.</p>
          <p>
            Please note that these are links to external websites and some articles may require an account or
            subscription to access.
          </p>
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
              <a href="https://tmb.apaopen.org/pub/yvcb5y06">
                Faulhaber, M.E., Lee, J.E. and Gentile, D.A. (2023) The effect of self-monitoring limited social media
                use on psychological well-being. Technology, Mind, and Behavior [online]. 4 (2). Available from:
                https://tmb.apaopen.org/pub/yvcb5y06 [Accessed 8 December 2025].
              </a>
            </li>
            <li>
              <a href="https://https://dx.plos.org/10.1371/journal.pone.0312522">
                Liu, L. and Tong, Y. (2024) Research on the relationship between virtual social interaction and the
                degree of loneliness based on algorithm matching technologies: A quantitative analysis on the SOUL APP-A
                virtual social software for strangers. <em>PLOS ONE</em> [online]. 19 (12). [Accessed 20 August 2025].
              </a>
            </li>
            <li>
              <a href="https://news.gallup.com/opinion/gallup/512618/almosy-quarter-world-feels-lonlely.aspx">
                Maese, E. (2023) <em>Almost a Quarter of the World Feels Lonely</em> [online]. Available from:
                https://news.gallup.com/opinion/gallup/512618/almosy-quarter-world-feels-lonlely.aspx [Accessed 8
                December 2025].
              </a>
            </li>
            <li>
              <a href="http://www.ncbi.nlm.nih.gov/books/NBK595227/">
                Murthy, V.H. (2023) ‘Our Epidemic of Loneliness and Isolation: The U.S. Surgeon General’s Advisory on
                the Healing Effects of Social Connection and Community’Publications and Reports of the Surgeon General
                [online]. Washington (DC): US Department of Health and Human Services. [Accessed 8 December 2025].
              </a>
            </li>
            <li>
              <a href="https://journals.sagepub.com/doi/10.1177/01461672241295870">
                Roberts, J.A., Young, P.D. and David, M.E. (2024) The Epidemic of Loneliness: A 9-Year Longitudinal
                Study of the Impact of Passive and Active Social Media Use on Loneliness.{" "}
                <em>Personality and Social Psychology Bulletin</em>
                [online].
              </a>
            </li>
            <li>
              <a href="https://linkinghub.elsevier.com/retrieve/pii/S0165032719333853">
                Wang, W., Wang, M., Hu, Q., Wang, P., Lei, L. and Jiang, S. (2020) Upward social comparison on mobile
                social media and depression: The mediating role of envy and the moderating role of marital quality.{" "}
                <em>Journal of Affective Disorders</em> [online]. 270, pp. 143–149.
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
      </Box>
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

  "#sources": {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "80%",
    maxWidth: "70ch",
    maxHeight: "100vh",
    overflowY: "hidden",
    backgroundColor: "white",

    padding: "1rem",

    borderRadius: "0.5rem",

    "> div": {
      height: "100%",
      overflowY: "hidden",
    },

    article: {
      overflowY: "auto",
      height: "100%",

      maxWidth: "70ch",

      padding: "2rem",

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
  },
});
