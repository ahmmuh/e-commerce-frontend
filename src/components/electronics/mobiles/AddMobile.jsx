import React, { useState } from "react";
import SelectElectronicOption from "../../../reuseableComponents/forms/SelectElectronicOption";
import { Box, Button, TextField } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { mobileOptionsBasicData } from "../../../basicData/electronics/mobiles/mobile";

const AddMobile = () => {
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
        Sälj telefon <PhoneIphoneIcon />
      </h3>
      <div className="row">
        <form>
          <Box sx={{ marginLeft: "1rem" }}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
              value={selectedValues.name}
              onChange={(event) => changeHandler(event, "name")}
            />
          </Box>
          <SelectElectronicOption
            label="Batterihälsa"
            value={selectedValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "batteryHealth")}
            options={mobileOptionsBasicData.batteryHealth}
          />
          <SelectElectronicOption
            label="Skärmstorlek"
            value={selectedValues.screenSize}
            changeHandler={(event) => changeHandler(event, "screenSize")}
            options={mobileOptionsBasicData.screenSize}
          />

          <SelectElectronicOption
            label="Färg"
            value={selectedValues.colors}
            changeHandler={(event) => changeHandler(event, "colors")}
            options={mobileOptionsBasicData.colors}
          />
          <SelectElectronicOption
            label="Skick"
            value={selectedValues.condition}
            changeHandler={(event) => changeHandler(event, "condition")}
            options={mobileOptionsBasicData.condition}
          />

          <SelectElectronicOption
            label="Kvitto"
            value={selectedValues.receipt}
            changeHandler={(event) => changeHandler(event, "receipt")}
            options={mobileOptionsBasicData.receipt}
          />

          <SelectElectronicOption
            label="Ägtid"
            value={selectedValues.ownershipDuration}
            changeHandler={(event) => changeHandler(event, "ownershipDuration")}
            options={mobileOptionsBasicData.ownershipDuration}
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

export default AddMobile;
