import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import { Team } from "./Team";

export default {
  title: "Example/Team",
  component: Team,
};

const Template = (args) => (
  <Provider store={store}>
    <Team {...args} />
  </Provider>
);
export const TeamTest = Template.bind({});
