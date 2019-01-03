import React from "react";
import styled from "styled-components";
import { Grid, Text, Circle } from "components";

const Card = styled(Grid)`
  margin: 0 0.5rem;
  border-bottom: 0.1rem solid #eee;
  cursor: pointer;
  padding: 0.5rem;
  min-width: 20rem;
  :hover {
    cursor: pointer;
    background-image: linear-gradient(to top, #ffffff, #f7f1e3);
  }
`;
const GREEN = "#2ecc71";
const Tile = props => {
  const { abn, name, location, status, type } = props;
  return (
    <Card direction="column" alignItems="flex-start">
      <Text fontWeight="500" fontSize="1.rem" color="#c23616">
        {name.toUpperCase()}
      </Text>
      <Grid direction="column" style={{ width: "100%" }}>
        <Text fontWeight="500" fontSize="0.9rem" color="#333">
          ABN: {abn}
        </Text>
        <Grid direction="row" justify="space-between">
          <Grid direction="row" alignItems="center" justify="flex-start">
            <Circle size="1rem" color={status === "Active" ? GREEN : "grey"} />
            <Text fontStyle="italic" color="#222">
              {status}
            </Text>
          </Grid>
          <Text color="#555">{location}</Text>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Tile;
