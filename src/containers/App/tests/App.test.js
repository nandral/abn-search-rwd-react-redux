import React from "react";
import { shallow } from "enzyme";
import App from "containers/App";
import { Header, Footer } from "components";

describe("App", () => {
  const component = shallow(<App />);
  it("should find Header and Footer", () => {
    expect(component.find(Header).length).toEqual(1);
    expect(component.find(Footer).length).toEqual(1);
  });
});
