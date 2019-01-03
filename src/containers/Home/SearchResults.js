import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card } from "components";

const SearchResultsStyles = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 700px;
  @media screen and (max-width: 450px) {
    width: 360px;
  }
`;

const SearchResults = props => {
  const { results } = props;
  return (
    <SearchResultsStyles>
      {results.map((business, index) => (
        <Link
          key={index}
          to={`/view/${business.abn}`}
          style={{ textDecoration: "none" }}
        >
          <Card {...business} />
        </Link>
      ))}
    </SearchResultsStyles>
  );
};

export default SearchResults;
