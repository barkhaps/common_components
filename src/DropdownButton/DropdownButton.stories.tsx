import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DropdownButton from "./DropdownButton";

const meta: Meta<typeof DropdownButton> = {
  title: "Components/DropdownButton",
  component: DropdownButton,
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

export const IconOnly: Story = {
  args: {
    displayType: "icon-only",
    variant: "tertiary",
    options: [
      { label: "View", onClick: () => console.log("View clicked") },
      { label: "Edit", onClick: () => console.log("Edit clicked") },
      { label: "Delete", onClick: () => console.log("Delete clicked") },
    ],
  },
};

export const TextOnly: Story = {
  args: {
    displayType: "text-only",
    text: "Actions",
    variant: "primary",
    options: [
      { label: "View", onClick: () => console.log("View clicked") },
      { label: "Edit", onClick: () => console.log("Edit clicked") },
      { label: "Delete", onClick: () => console.log("Delete clicked") },
    ],
  },
};

export const IconText: Story = {
  args: {
    displayType: "icon-text",
    text: "More Options",
    variant: "secondary",
    options: [
      { label: "View", onClick: () => console.log("View clicked") },
      { label: "Edit", onClick: () => console.log("Edit clicked") },
      { label: "Delete", onClick: () => console.log("Delete clicked") },
    ],
  },
};
