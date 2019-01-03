import React from "react";
import { Input, Grid, Icon, Card, Text, Loader } from "components";
import styled from "styled-components";
import { SEARCH_BY_ABN_REQUEST, SEARCH_BY_NAME_REQUEST } from "actions/types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SearchGrid = styled(Grid)`
  margin-top: 1rem;
  width: 700px;
  @media screen and (max-width: 450px) {
    width: 360px;
  }
`;
const Root = styled(Grid)`
  align-self: center;
  flex: 1;
  max-width: 700px;
`;

const SearchResults = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 700px;
  @media screen and (max-width: 450px) {
    width: 360px;
  }
`;

class Home extends React.Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchText } = this.state;
    if (isNaN(searchText)) {
      this.props.searchByName(this.state.searchText);
    } else {
      this.props.searchByAbn(this.state.searchText);
    }
  };

  renderSearchResults() {
    const { results } = this.props;
    return results.length
      ? results.map((business, index) => (
          <Link
            key={index}
            to={`/view/${business.abn}`}
            style={{ textDecoration: "none" }}
          >
            <Card {...business} />
          </Link>
        ))
      : null;
  }

  render() {
    const { error, results, loading } = this.props;
    return (
      <Root>
        <SearchGrid direction="column" justify="flex-start">
          <form onSubmit={this.handleSubmit}>
            <Grid direction="row" alignItems="center">
              <Input
                placeholder="Search by ABN or name"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
              <Icon onClick={this.handleSubmit} className="material-icons">
                search
              </Icon>
            </Grid>
            <Text color="red">{error || null}</Text>
          </form>
          {loading === true && <Loader />}
          {!error && results.length > 0 && (
            <SearchResults>{this.renderSearchResults()}</SearchResults>
          )}
        </SearchGrid>
      </Root>
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
