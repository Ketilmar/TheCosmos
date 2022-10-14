import { colors } from "../../constants";

import {
  StyledSection,
  StyledHeading,
  StyledPlanet,
  StyledCelestialObject,
  StyledPlanetParagraph
} from "./StyledPromo";

const PromoSection = () => (
  <StyledSection>
    <StyledHeading>Knowledge right at your fingertips</StyledHeading>
    <StyledPlanet>
      <StyledCelestialObject color={colors.mars}/>
      <StyledPlanetParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.venus}/>
      <StyledPlanetParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.neptune}/>
      <StyledPlanetParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </StyledPlanetParagraph>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;