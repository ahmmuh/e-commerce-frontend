import React, { useState } from "react";
import { desktopOptionsBasicData } from "../../../basicData/electronics/desktops/desktop";
import SelectElectronicOption from "../../../reuseableComponents/forms/SelectElectronicOption";
import MonitorIcon from "@mui/icons-material/Monitor";
import { Box, Button, TextField } from "@mui/material";

const AddDesktop = () => {
  const [selectedValues, setSelectedValues] = useState({
    batteryHealth: [],
    name: "",
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
        Sälj Ipad <MonitorIcon />
      </h3>
      <div className="row">
        <form>
          <Box sx={{ marginLeft: "1rem" }}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
            />
          </Box>
          <SelectElectronicOption
            label="Batterihälsa"
            value={selectedValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "batteryHealth")}
            options={desktopOptionsBasicData.batteryHealth}
          />
          <SelectElectronicOption
            label="Skärmstorlek"
            value={selectedValues.screenSize}
            changeHandler={(event) => changeHandler(event, "screenSize")}
            options={desktopOptionsBasicData.screenSize}
          />

          <SelectElectronicOption
            label="Färg"
            value={selectedValues.colors}
            changeHandler={(event) => changeHandler(event, "colors")}
            options={desktopOptionsBasicData.colors}
          />
          <SelectElectronicOption
            label="Skick"
            value={selectedValues.condition}
            changeHandler={(event) => changeHandler(event, "condition")}
            options={desktopOptionsBasicData.condition}
          />

          <SelectElectronicOption
            label="Kvitto"
            value={selectedValues.receipt}
            changeHandler={(event) => changeHandler(event, "receipt")}
            options={desktopOptionsBasicData.receipt}
          />

          <SelectElectronicOption
            label="Ägtid"
            value={selectedValues.ownershipDuration}
            changeHandler={(event) => changeHandler(event, "ownershipDuration")}
            options={desktopOptionsBasicData.ownershipDuration}
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

export default AddDesktop;
