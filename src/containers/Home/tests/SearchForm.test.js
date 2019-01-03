import React from "react";
import { shallow } from "enzyme";
import { Input, Icon } from "components";

import SearchForm from "../SearchForm";

describe("<SearchForm />", () => {
  it("should render an Input and Icon button before any request", () => {
    const component = shallow(<SearchForm />);
    expect(component.find(Input).length).toEqual(1);
    expect(component.find(Icon).length).toEqual(1);
  });
});
