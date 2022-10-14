import styled from "styled-components";
import { Link } from "react-router-dom";

const colors = {
  blue: ['#1E84FD', '#0238C5'],
  red:  ['#FD531E', '#9A2500']
}

export const StyledButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.$isRed ? colors.red[0] : colors.blue[0]};
  background: linear-gradient(
    90deg,
    ${props => props.$isRed ? colors.red[0] : colors.blue[0]} 0%,
    ${props => props.$isRed ? colors.red[1] : colors.blue[1]} 100%
  );
  color: white;
  font-weight: 500;
  text-decoration: none;
  padding: .5em 1em;
  border-radius: .5em;
  transition: filter .25s ease-in-out;
  text-align: center;

  &:hover {
    filter: brightness(110%);
  }
`;