import React from "react";

import { SearchBar } from "./Search";

export default {
  title: "Example/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const SearchBarTest = Template.bind({});
