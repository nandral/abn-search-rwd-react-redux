import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 0.5rem;
  font-size:1.5rem
  outline: none;
  padding: 0.1rem 1rem;
  margin-right: 1rem;
  color: #555;
  border:none;
  border-bottom: 2px solid #ccc;
  height:3rem;
  width: 100%;
  ::-webkit-input-placeholder {
    font-size:1.2rem
    font-weight: 100;
    color: #aaa
  }
  :focus{
      border-bottom: 2px solid #222;
  }
`;

export default Input;
