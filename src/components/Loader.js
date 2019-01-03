import styled, { keyframes } from "styled-components";
import React from "react";

const spin = keyframes`
  	0%{transform:rotateZ(0deg);}
	  100%{transform:rotateZ(360deg);}
`;

const morph = keyframes`
  0% {border-radius: 5px}
  50% {border-radius: 50%}
  100% {border-radius: 5px}
`;

const Ball = styled.div`
  width:100px;
  height 100px;
  border-radius:50%;
  margin: 0 auto;
  background-color:#d35400;
  background-image:linear-gradient(0deg,#d35400 0%, #f0932b 100%);
  animation: ${morph} 0.5s linear infinite, ${spin} 0.5s ease-in-out infinite;

`;

const Loader = () => {
  return <Ball />;
};
export default Loader;
