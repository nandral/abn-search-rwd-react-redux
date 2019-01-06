import React from "react";
import { shallow } from "enzyme";
import { Card } from "components";

import SearchResults from "../SearchResults";

describe("<SearchResults />", () => {
  it("should render 1 Card component when results count is 1", () => {
    const results = [
      {
        abn: "32614059737",
        name: "Trade Ledger",
        status: "Active",
        location: "2000 NSW"
      }
    ];
    const component = shallow(<SearchResults results={results} />);
    expect(component.find(Card).length).toEqual(1);
  });

  it("should render 2 Card components when results count is 2", () => {
    const results = [
      {
        abn: "32614059737",
        name: "Trade Ledger",
        status: "Active",
        location: "2000 NSW"
      },
      {
        abn: "64145706967",
        name: "TOP JUICE PTY LTD",
        status: "Active",
        location: "2000 NSW"
      }
    ];
    const component = shallow(<SearchResults results={results} />);
    expect(component.find(Card).length).toEqual(2);
  });
});
