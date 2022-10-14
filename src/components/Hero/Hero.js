import {
  StyledSection,
  StyledContentContainer,
  StyledHeading,
  StyledParagraph,
  StyledButton,
  StyledEarthAndMoonContainer,
  StyledEarth,
  StyledMoon
} from "./StyledHero";

import { colors } from "../../constants";

const HeroSection = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Get to know our neighbourhood better</StyledHeading>
      <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta, diam quis semper tincidunt, ante ante pellentesque lectus, vitae mollis tellus massa non risus. Nullam non eros auctor, viverra erat eget, condimentum nibh.</StyledParagraph>
      <StyledButton to="/planets">Start exploring</StyledButton>
    </StyledContentContainer>
    <StyledEarthAndMoonContainer>
      <StyledEarth color={colors.terre}/>
      <StyledMoon color={colors.moon}/>
    </StyledEarthAndMoonContainer>
  </StyledSection>
);

export default HeroSection;