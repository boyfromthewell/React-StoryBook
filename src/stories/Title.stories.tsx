import React from "react";

import { Meta, Story } from "@storybook/react";
import Title, { TitleProps } from "./Title";

export default {
  title: "Component/Title",
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "Default Title", size: "50px" };

export const Large = Template.bind({});
Large.args = { text: "Large Title", size: "100px", color: "blue" };

export const Small = Template.bind({});
Small.args = { text: "Small Title", size: "25px", color: "green" };
