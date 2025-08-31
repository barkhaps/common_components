import React from "react"; 
import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const headers = [
  { key: "invoice", displayText: "Invoice No" },
  { key: "date", displayText: "Created Date" },
  { key: "customer", displayText: "Customer Name" },
  { key: "email", displayText: "Email ID" },
  { key: "amount", displayText: "Total Amount", align: "right" },
  { key: "paid", displayText: "Paid Amount", align: "right" },
  { key: "balance", displayText: "Balance", align: "right" },
  { key: "status", displayText: "Status" },
];

const rows = [
  {
    invoice: "#757483920",
    date: "14-Aug-2025",
    customer: "AutoMobil Shop",
    email: "autosales@moto.com",
    amount: "₹32,450",
    paid: "₹35,900",
    balance: "₹17,450",
    status: "Overdue",
  },
  {
    invoice: "#753434567",
    date: "11-Jul-2025",
    customer: "Saudi Electric",
    email: "billing@saudielec.com",
    amount: "₹48,900",
    paid: "₹35,900",
    balance: "₹18,900",
    status: "Overdue",
  },
];

export const Basic: Story = {
  args: {
    headers,
    data: rows,
    page: 0,
    pageSize: 5,
    totalCount: 20,
    onPageChange: (page) => console.log("Page:", page),
    toolbarProps: {
      title: "Invoice View",
      buttons: [
        { label: "Add", startIcon: <AddIcon />, variant: "contained" },
        { label: "Export", startIcon: <DownloadIcon />, variant: "outlined" },
      ],
      searchField: {
        prefixIcon: <SearchIcon />,
        placeholder: "Search invoices",
      },
    },
  },
};
