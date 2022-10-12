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
    margin-bottom: 7.3125em;
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
    padding: 2.375em 0;
    @media (max-width: 811px) {
        flex-direction: column-reverse;
    }
    `;
  }}
  ${(props) => {
    if (props.linkContainer)
      return `
    justify-content: flex-end;
    width: 100%;`;
  }}
`;

export const Border = styled.div`
  height: 1px;
  background-color: #a7a7a7;
`;

export const HeaderFooterP = styled.p`
  font-weight: 800;
  font-size: 1.3rem;
  ${(props) => {
    if (props.smallHeader)
      return `
    font-size: 1.1rem;
    font-weight: 600;`;
  }}
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
