import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const SelectMobile = ({ label, options, changeHandler, ...props }) => {
  console.log("Props från dashboard för mobiler", options);
  return (
    <div className="container">
      <FormControl fullWidth variant="standard">
        {/* <InputLabel>{label}</InputLabel> */}
        <InputLabel htmlFor={label}>{label}</InputLabel>

        <Select {...props} onChange={changeHandler} sx={{ mb: "1rem" }}>
          {options?.map((option) => (
            <MenuItem
              key={option.value}
              value={
                option.value === undefined ||
                option.value === null ||
                options.length === 0
                  ? ""
                  : option.value
              }
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMobile;
