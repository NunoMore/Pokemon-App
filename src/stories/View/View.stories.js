import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import { View } from "./View";

export default {
  title: "Example/View",
  component: View,
};

const Template = (args) => (
  <Provider store={store}>
    <View {...args} />
  </Provider>
);

export const ViewTestSimple = Template.bind({});
ViewTestSimple.args = {
  detailed: false,
};

export const ViewTestDetailed = Template.bind({});
ViewTestDetailed.args = {
  detailed: true,
};
