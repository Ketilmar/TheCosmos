import styled from "styled-components";

export const StyledLayoutContainer = styled.div`
  > * {
    padding-inline: 1em;

    @media (min-width: 48em) {
      padding-inline: 2em;
    }

    @media (min-width: 80em) {
      padding-inline: calc((100% - 80em) / 2 + 2.5em);
    }
  }
`;