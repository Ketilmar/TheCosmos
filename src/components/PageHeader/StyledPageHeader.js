import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-block: 2em;

  h1,
  p {
    margin: 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    margin-block-start: .8em;
  }

  @media (min-width: 48em) {
    margin-block: 6em 4em;

    h1 {
      font-size: 4rem;
    }
  }
`;