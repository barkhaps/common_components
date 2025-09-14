import React, { useState } from "react";
import { IconButton, Button, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type DisplayType = "icon-only" | "text-only" | "icon-text";
type Variant = "primary" | "secondary" | "tertiary";

interface DropdownButtonProps {
  displayType?: DisplayType;
  variant?: Variant;
  text?: string;
  options: { label: string; onClick: () => void }[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  displayType = "icon-only",
  variant = "tertiary",
  text = "Options",
  options,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonStyles = {
    primary: { color: "#1976d2" },
    secondary: { color: "#9c27b0" },
    tertiary: { color: "#757575" },
  };

  return (
    <>
      {displayType === "icon-only" && (
        <IconButton onClick={handleOpen} sx={buttonStyles[variant]}>
          <MoreVertIcon />
        </IconButton>
      )}
      {displayType === "text-only" && (
        <Button variant="outlined" onClick={handleOpen} sx={buttonStyles[variant]}>
          {text}
        </Button>
      )}
      {displayType === "icon-text" && (
        <Button
          startIcon={<MoreVertIcon />}
          variant="outlined"
          onClick={handleOpen}
          sx={buttonStyles[variant]}
        >
          {text}
        </Button>
      )}

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((opt, idx) => (
          <MenuItem
            key={idx}
            onClick={() => {
              opt.onClick();
              handleClose();
            }}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownButton;
