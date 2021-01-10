import React from "react";

import { Header, View } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const HeaderTest = Template.bind({});
