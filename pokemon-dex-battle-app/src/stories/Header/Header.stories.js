import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => (
  <Provider store={store}>
    <Header {...args} />
  </Provider>
);

export const HeaderTest = Template.bind({});
