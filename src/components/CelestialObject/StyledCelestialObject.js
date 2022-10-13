import styled from "styled-components";

const startColor = "#A7A7A7";
const endColor   = "#0F131F";

export const StyledCelestialObject = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${props => props.color};
  background: linear-gradient(
    45deg,
    ${endColor} 0%,
    ${props => props.color || startColor} 100%
  );
`;