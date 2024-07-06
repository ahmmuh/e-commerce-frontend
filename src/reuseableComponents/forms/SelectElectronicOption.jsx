import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const SelectElectronicOption = ({
  label,
  data,
  name,
  changeHandler,
  ...props
}) => {
  // console.log("Props från dashboard för mobiler", data);
  const isValidArray = Array.isArray(data);
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="container">
      <div className="row">
        <FormControl
          fullWidth
          variant="standard"
          sx={{ marginBottom: "1.5rem" }}
        >
          <InputLabel htmlFor={label} sx={{ marginLeft: ".7rem" }}>
            {label}
          </InputLabel>

          <Select {...props} value={props.value ?? ""} onChange={changeHandler}>
            <MenuItem value=""></MenuItem>
            {isValidArray &&
              data?.map((option) => (
                <MenuItem key={option.id} value={option.value ?? ""}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SelectElectronicOption;
