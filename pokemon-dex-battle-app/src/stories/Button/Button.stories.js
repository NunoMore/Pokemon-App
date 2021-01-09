import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonTest = Template.bind({});
ButtonTest.args = {
  label: "Button",
};
