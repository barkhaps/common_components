import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Composer from "./Composer";
import { Box } from "@mui/material";

const meta: Meta<typeof Composer> = {
  title: "Components/EmailComposer",
  component: Composer,
};

export default meta;
type Story = StoryObj<typeof Composer>;

export const BasicEditor: Story = {
  args: {
    onSend: (content: string) => {
      console.log("Email content sent:", content);
      alert("Email content logged to console. Check DevTools.");
    },
  },
};

export const WithContainer: Story = {
  render: (args) => (
    <Box padding={4} maxWidth="800px" margin="auto">
      <Composer {...args} />
    </Box>
  ),
  args: {
    onSend: (content: string) => {
      console.log("Email content sent:", content);
      alert("Email content logged to console. Check DevTools.");
    },
  },
};
