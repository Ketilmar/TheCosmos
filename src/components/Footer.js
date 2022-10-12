import {
  Border,
  FooterA,
  FooterLink,
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterRow,
  StyledFooterSection,
} from "./StyledFooter";

export const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterRow margin>
        <StyledFooterRow>
          <StyledFooterColumn>
            <HeaderFooterP>The solar system</HeaderFooterP>
            <FooterP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </FooterP>
          </StyledFooterColumn>
          <StyledFooterRow linkContainer>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Planets</HeaderFooterP>
              <FooterLink to="/">Mercury</FooterLink>
              <FooterLink to="/">Venus</FooterLink>
              <FooterLink to="/">Earth</FooterLink>
              <FooterLink to="/">Mars</FooterLink>
              <FooterLink to="/">Jupiter</FooterLink>
              <FooterLink to="/">Saturn</FooterLink>
              <FooterLink to="/">Uranus</FooterLink>
              <FooterLink to="/">Neptune</FooterLink>
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Information</HeaderFooterP>
              <FooterA href="#">How it works</FooterA>
              <FooterA href="#">Download app</FooterA>
              <FooterA href="#">Developer portal</FooterA>
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>About</HeaderFooterP>
              <FooterA href="#">News and press</FooterA>
              <FooterA href="#">Personal data and collection</FooterA>
              <FooterA href="#">FAQ</FooterA>
            </StyledFooterColumn>
          </StyledFooterRow>
        </StyledFooterRow>
      </StyledFooterRow>
      <Border />
      <StyledFooterRow bottomContainer>
        <FooterP bottom>
          Copyright 2022 The Solar System, All rights reserved.
        </FooterP>
        <StyledFooterRow bottomDiv>
          <FooterP bottom>Terms of Service</FooterP>
          <FooterP bottom>Privacy Policy</FooterP>
        </StyledFooterRow>
      </StyledFooterRow>
    </StyledFooterSection>
  );
};
