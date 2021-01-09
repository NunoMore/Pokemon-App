import React from "react";

import { View } from "./View";

export default {
  title: "Example/View",
  component: View,
};

const Template = (args) => <View {...args} />;

export const ViewTestSimple = Template.bind({});
ViewTestSimple.args = {
  detailed: false,
};

export const ViewTestDetailed = Template.bind({});
ViewTestDetailed.args = {
  detailed: true,
};
