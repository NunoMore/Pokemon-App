import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Arena } from "./Arena";

export default {
  title: "Example/Arena",
  component: Arena,
};

const Template = (args) => (
  <Provider store={store}>
    <Arena {...args} />
  </Provider>
);
export const ArenaTest = Template.bind({});
