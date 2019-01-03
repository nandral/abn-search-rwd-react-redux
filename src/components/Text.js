import styled from "styled-components";

const Text = styled.label`
  font-size: ${props => props.fontSize || "1rem"};
  font-weight: ${props => props.fontWeight || "300"};
  font-style:${props => props.fontStyle || "normal"}
  padding: 0.3rem;
  color: ${props => props.color || "default"};
`;

export default Text;
