import { MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { SelectProps } from "./types";

const PaginationPageSizeSelectMenu: FC<SelectProps> = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      sx={{
        height: "56px",
        textAlign: "center",
        width: "100px",
      }}
      MenuProps={{
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      }}
    >
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={15}>15</MenuItem>
      <MenuItem value={20}>20</MenuItem>
    </Select>
  );
};

export default PaginationPageSizeSelectMenu;
