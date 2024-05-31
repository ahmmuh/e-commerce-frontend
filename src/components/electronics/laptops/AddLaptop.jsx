import React, { useState } from "react";
import { laptopOptionsBasicData } from "../../../basicData/electronics/laptops/laptop";
import { Box, Button, TextField } from "@mui/material";
import SelectMobile from "../../../reuseableComponents/forms/SelectElectronicOption";
import LaptopIcon from "@mui/icons-material/Laptop";
const AddLaptop = () => {
  const [selectedValues, setSelectedValues] = useState({
    name: "",
    batteryHealth: [],
    screenSize: [],
    colors: [],
    condition: [],
    receipt: [],
    ownershipDuration: [],
  });
  const [selectItem, setSelectItem] = useState([]);
  const [displaySelectedItem, setSelectedDisplayItem] = useState(false);
  const changeHandler = (e, category) => {
    setSelectedValues({
      ...selectedValues,
      [category]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Mobile values ", selectedValues);
  };

  return (
    <div className="container mt-2">
      <h3 className="lead">
        Sälj Laptop <LaptopIcon />
      </h3>
      <div className="row">
        <form>
          <Box sx={{ marginLeft: "1rem" }}>
            <TextField
              fullWidth
              id="standard-basic"
              name="name"
              label="Name"
              value={selectedValues.name}
              variant="standard"
              onChange={(event) => changeHandler(event, "name")}
            />
          </Box>
          <SelectMobile
            label="Batterihälsa"
            value={selectedValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "batteryHealth")}
            options={laptopOptionsBasicData.batteryHealth}
          />
          <SelectMobile
            label="Skärmstorlek"
            value={selectedValues.screenSize}
            changeHandler={(event) => changeHandler(event, "screenSize")}
            options={laptopOptionsBasicData.screenSize}
          />

          <SelectMobile
            label="Färg"
            value={selectedValues.colors}
            changeHandler={(event) => changeHandler(event, "colors")}
            options={laptopOptionsBasicData.colors}
          />
          <SelectMobile
            label="Skick"
            value={selectedValues.condition}
            changeHandler={(event) => changeHandler(event, "condition")}
            options={laptopOptionsBasicData.condition}
          />

          <SelectMobile
            label="Kvitto"
            value={selectedValues.receipt}
            changeHandler={(event) => changeHandler(event, "receipt")}
            options={laptopOptionsBasicData.receipt}
          />

          <SelectMobile
            label="Ägtid"
            value={selectedValues.ownershipDuration}
            changeHandler={(event) => changeHandler(event, "ownershipDuration")}
            options={laptopOptionsBasicData.ownershipDuration}
          />

          <Button
            onClick={submitHandler}
            variant="contained"
            sx={{ marginLeft: ".6rem", width: "12rem" }}
            size="large"
          >
            Spara
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddLaptop;
