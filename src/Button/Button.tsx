import * as React from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ label, ...muiProps }) => {
  return <MuiButton {...muiProps}>{label}</MuiButton>;
};

export default Button;
