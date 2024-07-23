import { Button, TextField } from "@mui/material";
import { Search } from "lucide-react";
import React, { ChangeEvent, FC, useState } from "react";
import { FilterFormProps } from "./types";

const FilterForm: FC<FilterFormProps> = ({ searchQuery, setSearchQuery }) => {
  const [filterValue, setFilterValue] = useState("");
  const handleFilter = () => {
    setSearchQuery(filterValue);
  };

  return (
    <React.Fragment>
      <TextField
        placeholder="Search by name"
        size="small"
        value={filterValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setFilterValue(event.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleFilter}
        disabled={searchQuery === filterValue}
        endIcon={<Search />}
      >
        Search
      </Button>
    </React.Fragment>
  );
};

export default FilterForm;

// Todo
