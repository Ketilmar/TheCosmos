import styled from "styled-components";

import CelestialObject from "../CelestialObject/CelestialObject";
import Button from "../Button/Button";

export const StyledCard = styled.div`
  background-color: #141823;
  padding: 2em;
  display: flex;
  flex-direction: column;
  border-radius: .5em;
  align-items: center;
`;

export const StyledCelestialObject = styled(CelestialObject)`
  width: 60%;
`;

export const StyledDescription = styled.p`
  text-align: center;
  color: #FFFFFF;
  padding-block: .5em 2em;
  font-weight: 300;
`;

export const StyledButton = styled(Button)`
  min-width: 80%;
`;