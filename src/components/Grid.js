import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.alignItems || "stretch"};
`;

export default Grid;
