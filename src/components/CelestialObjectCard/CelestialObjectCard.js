import {
  StyledCard,
  StyledCelestialObject,
  StyledDescription,
  StyledButton
} from "./StyledCelestialObjectCard";

const CelestialObjectCard = ({
  className,
  color,
  name,
  to
}) => (
  <StyledCard className={className}>
    <StyledCelestialObject color={color}/>
    <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledDescription>
    <StyledButton to={to || '/'}>{name}</StyledButton>
  </StyledCard>
);

export default CelestialObjectCard;