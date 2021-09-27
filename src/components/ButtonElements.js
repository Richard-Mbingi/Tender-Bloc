import styled from "styled-components";
import { Link } from "react-scroll";

//TODO: Button arrow orientation
export const Button = styled(Link)`
  border: solid 1.25px;
  border-color: ${({primary}) => (primary ? "#ff7e7e" : "#373a5b")};
  border-radius: 5px;
  background: transparent;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#ff7e7e" : "#373a5b")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#ff7e7e" : "#373a5b")};
    color: ${({ dark }) => (dark ? "#373a5b" : "#fff")};
  }
`;
