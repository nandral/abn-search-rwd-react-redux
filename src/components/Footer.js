import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";

const Footer = styled(Grid)`
  width: 100%;
  text-align: center;
  font-size:0.75rem;
  background-color: #e2e0e0
  padding: 0.5rem;
  margin-top: auto;
  align-items:center;
  @media screen and (max-width:425px){
    flex-direction:column;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
`;

export default () => (
  <Footer>
    ABN Search is the public view of the&nbsp;
    <Link target="_blank" href="https://abr.business.gov.au/">
      Australian Business Register (ABR)
    </Link>
  </Footer>
);
