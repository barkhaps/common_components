import React from "react"; 
import type { Meta, StoryObj } from "@storybook/react";
import TextFields from "./TextFields";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const meta: Meta<typeof TextFields> = {
  title: "Components/TextField",
  component: TextFields,
  args: {
    label: "Search",
    variant: "outlined",
  },
};

export default meta;
type Story = StoryObj<typeof TextFields>;

export const WithPrefix: Story = {
  args: {
    prefixIcon: <SearchIcon />,
    placeholder: "Search invoices",
    onEnter: (val) => alert("Entered: " + val),
  },
};

export const WithSuffix: Story = {
  args: {
    suffixIcon: <ClearIcon />,
    placeholder: "Type something",
  },
};

export const BothIcons: Story = {
  args: {
    prefixIcon: <SearchIcon />,
    suffixIcon: <ClearIcon />,
    placeholder: "Search with clear",
  },
};
