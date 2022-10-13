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
  background-color: #141823;
  padding-top: 5.9375em;
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
    margin: 7.3125em 0;
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
    width: 100%;
    white-space: nowrap;`;
  }}
`;

export const Border = styled.div`
  height: 1px;
  background-color: #a7a7a7;
`;

export const HeaderFooterP = styled.h5`
  font-weight: 800;
  font-size: 1.3rem;
  margin: 1.15em 0;
  ${(props) => {
    if (props.smallHeader)
      return `
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1.4em 0;`;
  }};
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
