import styled from "styled-components";

export const StyledCelestialObjectCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (min-width: 26em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;