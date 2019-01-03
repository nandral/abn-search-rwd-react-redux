import React from "react";
import styled from "styled-components";
import { Grid, Text } from "components";

const RootLayout = styled(Grid)`
  align-self: center;
  flex: 1;
  max-width: 720px;
  margin-top: 2rem;
`;

const AboutLayout = styled(Grid)`
  margin: 2rem;
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

export default function() {
  return (
    <RootLayout>
      <AboutLayout
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Text fontWeight="500" fontSize="120%">
          About ABN Search
        </Text>
        <Text>
          ABN Lookup is the public view of the Australian Business Register
          (ABR). It provides access to publicly available information supplied
          by businesses when they register for an Australian Business Number
          (ABN).
        </Text>
        <Text>
          This site is developed using the&nbsp;
          <A target="_blank" href="https://abr.business.gov.au/json/">
            JSON
          </A>
          &nbsp;APIs of &nbsp;
          <A target="_blank" href="https://abr.business.gov.au/">
            Australian Business Register (ABR)
          </A>
        </Text>
        <p>
          More details about the technologies used in developing this front end
          along the with source code can be found on&nbsp;
          <A
            href="https://github.com/nandral/abn-search-rwd-react-redux"
            target="_blank"
          >
            GitHub
          </A>
        </p>
      </AboutLayout>
    </RootLayout>
  );
}
