import { StyledCelestialObject } from "./StyledCelestialObject";

const CelestialObject = ({ className, color = '#A7A7A7' }) => (
  <StyledCelestialObject className={className} startColor={color} endColor="#0F131F" />
);

export default CelestialObject