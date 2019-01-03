import React from "react";
import { Input, Grid, Icon, Text } from "components";

const SearchForm = props => {
  const { error, searchText, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Grid direction="row" alignItems="center">
        <Input
          placeholder="Search by ABN or name"
          value={searchText}
          onChange={handleChange}
        />
        <Icon onClick={handleSubmit} className="material-icons">
          search
        </Icon>
      </Grid>
      <Text color="red">{error || null}</Text>
    </form>
  );
};

export default SearchForm;
