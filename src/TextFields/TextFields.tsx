import * as React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";

export interface TextFieldsProps extends Omit<TextFieldProps, "onChange"> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
}

const TextFields: React.FC<TextFieldsProps> = ({
  prefixIcon,
  suffixIcon,
  onChange,
  onEnter,
  ...props
}) => {
  return (
    <TextField
      {...props}
      onChange={(e) => onChange?.(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter?.((e.target as HTMLInputElement).value);
        }
      }}
      InputProps={{
        startAdornment: prefixIcon && (
          <InputAdornment position="start">{prefixIcon}</InputAdornment>
        ),
        endAdornment: suffixIcon && (
          <InputAdornment position="end">{suffixIcon}</InputAdornment>
        ),
      }}
    />
  );
};

export default TextFields;
