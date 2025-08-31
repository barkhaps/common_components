import React from "react"; 
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Click Me",
    variant: "contained",
    color: "primary"
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button"
  }
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    color: "secondary"
  }
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined"
  }
};
