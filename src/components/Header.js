import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, StyledLink } from "components";

const AppHeader = styled(Grid)`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #505050;
  height: 2.5rem;
  padding: 0.5rem;
  padding-right: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Header = () => (
  <AppHeader direction="row" justify="space-between">
    <StyledLink to="/" fontSize="1.5rem" fontWeight="600">
      ABN Search
    </StyledLink>
    <StyledLink to="/about" fontSize=".8rem">
      about
    </StyledLink>
  </AppHeader>
);

export default Header;
