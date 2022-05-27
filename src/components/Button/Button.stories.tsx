import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, {ButtonProps} from "./";

export default {
    title: "Components/Button",
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, variant: "secondary", label: "Secondary 😇" };
