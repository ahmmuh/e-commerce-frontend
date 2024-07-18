import React, { useState } from "react";
import { ipadOptionsBasicData } from "../../../basicData/electronics/ipdas/ipad";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SelectElectronicOption from "../../../components/forms/SelectElectronicOption";
import { Box, Button, TextField } from "@mui/material";
import TabletMacIcon from "@mui/icons-material/TabletMac";
const AddIpad = () => {
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
        Sälj Ipad <TabletMacIcon />
      </h3>
      <div className="row">
        <form>
          <Box sx={{ marginLeft: "1rem" }}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Name"
              value={selectedValues.name}
              variant="standard"
            />
          </Box>
          <SelectElectronicOption
            label="Batterihälsa"
            value={selectedValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "batteryHealth")}
            options={ipadOptionsBasicData.batteryHealth}
          />
          <SelectElectronicOption
            label="Skärmstorlek"
            value={selectedValues.screenSize}
            changeHandler={(event) => changeHandler(event, "screenSize")}
            options={ipadOptionsBasicData.screenSize}
          />

          <SelectElectronicOption
            label="Färg"
            value={selectedValues.colors}
            changeHandler={(event) => changeHandler(event, "colors")}
            options={ipadOptionsBasicData.colors}
          />
          <SelectElectronicOption
            label="Skick"
            value={selectedValues.condition}
            changeHandler={(event) => changeHandler(event, "condition")}
            options={ipadOptionsBasicData.condition}
          />

          <SelectElectronicOption
            label="Kvitto"
            value={selectedValues.receipt}
            changeHandler={(event) => changeHandler(event, "receipt")}
            options={ipadOptionsBasicData.receipt}
          />

          <SelectElectronicOption
            label="Ägtid"
            value={selectedValues.ownershipDuration}
            changeHandler={(event) => changeHandler(event, "ownershipDuration")}
            options={ipadOptionsBasicData.ownershipDuration}
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

export default AddIpad;
