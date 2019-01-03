import React from "react";
import { shallow } from "enzyme";

import { Home } from "../index";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import { Loader } from "components";

describe("<Home />", () => {
  it("should render  only <SearchForm />, should not render SearchResults & Loader before any search request", () => {
    const component = shallow(<Home />);
    expect(component.find(SearchForm).length).toEqual(1);
    expect(component.find(SearchResults).length).toEqual(0);
    expect(component.find(Loader).length).toEqual(0);
  });

  it("should render <Loader /> component when search request is in progress", () => {
    const component = shallow(<Home loading={true} />);
    expect(component.find(Loader).length).toEqual(1);
  });

  it("should render <SearchResults /> component when results are available in props", () => {
    const results = [
      {
        abn: "32614059737",
        name: "Trade Ledger",
        status: "Active",
        location: `2000 NSW`
      }
    ];
    const component = shallow(<Home results={results} />);
    expect(component.find(SearchResults).length).toEqual(1);
  });
});
