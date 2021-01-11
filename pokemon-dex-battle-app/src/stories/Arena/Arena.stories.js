import React from "react";
import { Arena } from "./Arena";

export default {
  title: "Example/Arena",
  component: Arena,
};

const Template = (args) => <Arena {...args} />;
export const ArenaTest = Template.bind({});
