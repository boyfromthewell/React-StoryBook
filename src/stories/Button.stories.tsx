import React from "react";

import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Component/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const BasicBtn = Template.bind({});
BasicBtn.args = { text: "Default Button", size: "100px" };

export const BlueBtn = Template.bind({});
BlueBtn.args = {
  text: "Blue Button",
  size: "75px",
  isEmpty: false,
  backgroundColor: "blue",
};

export const EmptyBtn = Template.bind({});
EmptyBtn.args = {
  text: "Empty Button",
  size: "75px",
  isEmpty: true,
};
