import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { VIEW_ABN_REQUEST } from "actions/types";
import { Grid, Text, StyledLink, Circle } from "components";
import Table, { TableRow, TableData } from "components/Table";

const RootLayout = styled(Grid)`
  align-self: center;
  flex: 1;
  max-width: 720px;
`;

const ViewLayout = styled(Grid)`
  margin: 1rem;
  width: 45rem;
  @media screen and (max-width: 30rem) {
    width: 20rem;
  }
`;

const A = styled.a`
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
`;

const GREEN = "#2ecc71";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.props.viewAbn(this.props.match.params.abn);
  }

  render() {
    const { error = "", business = {} } = this.props;
    const { name, status, abn, location, type } = business;
    console.log(error, business);
    const externalLink = `https://abr.business.gov.au/ABN/View?abn=${abn}`;
    return (
      <RootLayout>
        <ViewLayout
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          style={{ margin: "3rem" }}
        >
          <StyledLink to="/" color="#c23616" style={{ marginBottom: "1rem" }}>
            <Grid direction="row" alignItems="center">
              <i className="material-icons">arrow_back_ios</i>
              Back to Search results
            </Grid>
          </StyledLink>
          <Table>
            <TableRow>
              <TableData>Name</TableData>
              <TableData>
                <Text fontWeight="500" fontSize="1.rem" color="#c23616">
                  {name}
                </Text>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>ABN</TableData>
              <TableData> {abn}</TableData>
            </TableRow>
            <TableRow>
              <TableData>Status</TableData>
              <TableData>
                <Grid direction="row" alignItems="center" justify="flex-start">
                  <Circle
                    size="0.9rem"
                    color={status === "Active" ? GREEN : "grey"}
                  />
                  <Text fontStyle="italic" color="#222">
                    {status}
                  </Text>
                </Grid>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>Type</TableData>
              <TableData> {type}</TableData>
            </TableRow>
            <TableRow>
              <TableData>Location</TableData>
              <TableData> {location}</TableData>
            </TableRow>
          </Table>
          <Grid>
            More details can be found on&nbsp;
            <A href={externalLink} target="_blank">
              ABR site
            </A>
          </Grid>
        </ViewLayout>
      </RootLayout>
    );
  }
}

function mapStateToProps(state) {
  const { error, business } = state.search;
  return {
    error,
    business
  };
}

const mapDispatchToProps = dispatch => {
  return {
    viewAbn: abn => dispatch({ type: VIEW_ABN_REQUEST, payload: abn })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
