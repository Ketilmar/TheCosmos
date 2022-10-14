import styled from "styled-components";
import CelestialObject from "../CelestialObject/CelestialObject";

export const StyledSection = styled.section`
  position: relative;
  display: grid;
  align-content: center;
  align-items: center;
  justify-items: center;
  padding-block: 10em;

  @media (min-width: 48em) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const StyledContentContainer = styled.div`
  text-align: center;
  
  @media (min-width: 48em) {
    grid-column: 1 / 8;
    text-align: start;
  }
`;

export const StyledHeading = styled.h2``;

export const StyledParagraph = styled.p``;

export const StyledMarsAndMoonsContainer = styled.div`
  position: absolute;
  opacity: 0.2;
  inset: 0;
  margin: auto;
  width: 100%;
  aspect-ratio: 1;
  padding: 2em;
  z-index: -10;

  @media (min-width: 48em) {
    position: relative;
    grid-column: 8 / 13;
    opacity: 1;
    padding: 4em;
  }
`;

export const StyledMars = styled(CelestialObject)``;

export const StyledPhobos = styled(CelestialObject)`
  position: absolute;
  inset-block-start: 2em;
  inset-inline-end: 1em;
  width: 15%;
  height: 15%;
`;

export const StyledDeimos = styled(CelestialObject)`
  position: absolute;
  inset-block-end: 2em;
  inset-inline-start: 2em;
  width: 10%;
  height: 10%;
`;