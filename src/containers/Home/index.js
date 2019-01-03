import React from "react";
import { Grid, Loader } from "components";
import styled from "styled-components";
import { SEARCH_BY_ABN_REQUEST, SEARCH_BY_NAME_REQUEST } from "actions/types";
import { connect } from "react-redux";

import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const SearchGrid = styled(Grid)`
  margin-top: 1rem;
  width: 700px;
  @media screen and (max-width: 450px) {
    width: 360px;
  }
`;
const RootLayout = styled(Grid)`
  align-self: center;
  flex: 1;
  max-width: 700px;
`;

export class Home extends React.Component {
  state = {
    searchText: ""
  };

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchText } = this.state;
    if (isNaN(searchText)) {
      this.props.searchByName(searchText);
    } else {
      this.props.searchByAbn(searchText);
    }
  };

  render() {
    const { error, results = [], loading } = this.props;
    return (
      <RootLayout>
        <SearchGrid direction="column" justify="flex-start">
          <SearchForm
            searchText={this.state.searchText}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={error}
          />
          {loading === true && <Loader />}
          {!error && results.length > 0 && <SearchResults results={results} />}
        </SearchGrid>
      </RootLayout>
    );
  }
}

function mapStateToProps(state) {
  const { error, results, loading } = state.search;
  return {
    error,
    results,
    loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    searchByName: searchText =>
      dispatch({ type: SEARCH_BY_NAME_REQUEST, payload: searchText }),
    searchByAbn: searchText =>
      dispatch({ type: SEARCH_BY_ABN_REQUEST, payload: searchText })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
