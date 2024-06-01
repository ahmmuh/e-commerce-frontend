import React, { useState } from "react";
import SelectElectronicOption from "../../reuseableComponents/forms/SelectElectronicOption";
import { Box, Button, TextField } from "@mui/material";
import { carAttributes } from "../../basicData/vehicles/carAttributes";

const AddBus = () => {
  const [selectedValues, setSelectedValues] = useState({
    transmission: [],
    drive: [],
    bodyType: [],
    seats: [],
    receipt: [],
    colors: [],
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
      <h3 className="lead">Sälj Ipad</h3>
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
            options={carAttributes.batteryHealth}
          />
          <SelectElectronicOption
            label="transmission"
            value={selectedValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "transmission")}
            options={carAttributes.transmission}
          />

          <SelectElectronicOption
            label="Biltyp"
            value={selectedValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "drive")}
            options={carAttributes.drive}
          />

          <SelectElectronicOption
            label="Färg"
            value={selectedValues.colors}
            changeHandler={(event) => changeHandler(event, "colors")}
            options={carAttributes.colors}
          />
          <SelectElectronicOption
            label="Skick"
            value={selectedValues.condition}
            changeHandler={(event) => changeHandler(event, "condition")}
            options={carAttributes.condition}
          />

          <SelectElectronicOption
            label="Kvitto"
            value={selectedValues.receipt}
            changeHandler={(event) => changeHandler(event, "receipt")}
            options={carAttributes.receipt}
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
export default AddBus;
