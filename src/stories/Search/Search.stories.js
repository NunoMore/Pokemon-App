import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import { SearchBar } from "./Search";

export default {
  title: "Example/SearchBar",
  component: SearchBar,
};

const Template = (args) => (
  <Provider store={store}>
    <SearchBar {...args} />;
  </Provider>
);
export const SearchBarTest = Template.bind({});
