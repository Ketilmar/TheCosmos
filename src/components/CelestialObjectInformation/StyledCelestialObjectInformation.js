import styled from "styled-components";

export const StyledInformationContainer = styled.div`
  background-color: #141823;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 1em;

  > *:nth-child(odd):not(:first-child):not(:last-child) {
    margin-block-end: 1em;
  }

  b {
    font-weight: 600;
  }

  span {
    font-weight: 300;
  }

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;

    > *:nth-child(odd):not(:first-child):not(:last-child) {
      margin: 0;
    }

    span {
      text-align: right;
    }
  }

  @media (min-width: 64em) {
    padding: 2em;
  }
`;

export const StyledHeading = styled.h3`
  margin-block: 0 1em;

  @media (min-width: 48em) {
    grid-column: 1 / 3;
  }
`;