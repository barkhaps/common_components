import * as React from "react";
import { Box, Stack, Button, ButtonProps } from "@mui/material";
import TextFields, { TextFieldsProps } from "../TextFields/TextFields";

export interface ToolbarButton extends ButtonProps {
  label: string;
}

export interface ToolbarProps {
  title?: string;
  buttons?: ToolbarButton[];
  searchField?: TextFieldsProps;
  children?: React.ReactNode; // for any custom extra items
}

const Toolbar: React.FC<ToolbarProps> = ({ title, buttons, searchField, children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={1.5}
      borderBottom="1px solid #e0e0e0"
      bgcolor="white"
    >
      {/* Left side (title + search) */}
      <Stack direction="row" spacing={2} alignItems="center">
        {title && <h3 style={{ margin: 0 }}>{title}</h3>}
        {searchField && <TextFields size="small" {...searchField} />}
      </Stack>

      {/* Right side (buttons + custom children) */}
      <Stack direction="row" spacing={1} alignItems="center">
        {buttons?.map((btn, idx) => (
          <Button key={idx} {...btn}>
            {btn.label}
          </Button>
        ))}
        {children}
      </Stack>
    </Box>
  );
};

export default Toolbar;
