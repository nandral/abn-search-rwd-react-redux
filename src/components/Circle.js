import styled from "styled-components";

const Circle = styled.div`
  margin: 0.3rem;
  display: inline-block;
  width: ${props => props.size || "0.5rem"};
  height: ${props => props.size || "0.5rem"};
  background: ${props => props.color || "#bdc3c7"};
  border-radius: 50%;
`;

export default Circle;
