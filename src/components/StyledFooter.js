import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.21875em;
`;

export const StyledFooterSection = styled.section`
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  background-color: #0f131f;
`;

export const StyledFooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8.3125em;
  @media (max-width: 811px) {
    gap: 1.5625em;
    flex-direction: column;
  }
  ${(props) => {
    if (props.margin)
      return `
    margin: 1vh 4vw 7.3125em 4vw;
    `;
  }}
  ${(props) => {
    if (props.bottomDiv)
      return `
    margin: 0;
     @media (max-width: 811px) {
    gap: 1.066875em;
  }`;
  }}
  ${(props) => {
    if (props.bottomContainer)
      return `
    margin: 1vh 4vw 0 4vw;
    padding: 2.375em 0;
    @media (max-width: 811px) {
        flex-direction: column-reverse;
    }
    `;
  }}
`;

export const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a7a7a7;
`;

export const HeaderFooterP = styled.p`
  font-weight: 800;
  font-size: 1.3rem;
`;

export const FooterP = styled.p`
  color: #cccccc;
  margin: 0;
  ${(props) => {
    if (props.bottom)
      return `
    color: #A7A7A7;
    font-size: 0.875rem;`;
  }}
`;

export const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
`;

export const FooterA = styled.a`
  color: #cccccc;
  text-decoration: none;
`;

export const StyledFooterDiv = styled.div`
  margin: 1vh 4vw 0 4vw;
`;
