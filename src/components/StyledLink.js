import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: ${props => props.fontSize || "1rem"};
  color: ${props => props.color || "#eee"};
  padding-left: 0.5rem;
  font-weight: ${props => props.fontWeight || "default"};
`;

export default StyledLink;
