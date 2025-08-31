import React from "react"; 
import type { Meta, StoryObj } from "@storybook/react";
import Toolbar from "./Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Toolbar",
  component: Toolbar,
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Basic: Story = {
  args: {
    title: "Invoice View",
    buttons: [
      { label: "Add Invoice", startIcon: <AddIcon />, variant: "contained" },
      { label: "Export", startIcon: <DownloadIcon />, variant: "outlined" },
    ],
    searchField: {
      prefixIcon: <SearchIcon />,
      placeholder: "Search invoices",
      onEnter: (val) => alert("Searching for: " + val),
    },
  },
};

export const WithExtraChildren: Story = {
  args: {
    title: "Customer View",
    buttons: [{ label: "Export", variant: "contained" }],
    children: <span style={{ fontSize: "14px", color: "#666" }}>10 Customers</span>,
  },
};
