import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { Header, Footer, Grid } from "components";
import View from "containers/View";
import Home from "containers/Home";
import About from "containers/About";

const RootGrid = styled(Grid)`
  min-height: 100vh;
`;

const App = () => (
  <RootGrid direction="column" justify="space-between">
    <Header />
    <Route path="/about" component={About} />
    <Route path="/view/:abn" component={View} />
    <Route path="/" exact component={Home} />
    <Footer />
  </RootGrid>
);

export default App;
