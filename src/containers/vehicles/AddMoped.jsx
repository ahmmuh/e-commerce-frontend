import React, { useState } from "react";
import { carAttributes } from "../../basicData/vehicles/carAttributes";
import { Box, Button, TextField } from "@mui/material";
import SelectVehicleOptions from "../../components/forms/SelectVehicleOptions";

const AddMoped = () => {
  const [selectedValues, setSelectedValues] = useState({
    transmission: [],
    drive: [],
    bodyType: [],
    seats: [],
    receipt: [],
    colors: [],
    miltal: [],
    priser: [],
    marken: [],
    drivmedel: [],
    modellAr: [],
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

          <SelectVehicleOptions
            label="Modellår"
            value={selectedValues.modellAr}
            changeHandler={(event) => changeHandler(event, "modellAr")}
            options={carAttributes.modellAr}
          />
          <SelectVehicleOptions
            label="Miltal"
            value={selectedValues.miltal}
            changeHandler={(event) => changeHandler(event, "miltal")}
            options={carAttributes.miltal}
          />

          <SelectVehicleOptions
            label="Pris"
            value={selectedValues.priser}
            changeHandler={(event) => changeHandler(event, "priser")}
            options={carAttributes.priser}
          />
          <SelectVehicleOptions
            label="Bränsle"
            value={selectedValues.drivmedel}
            changeHandler={(event) => changeHandler(event, "drivmedel")}
            options={carAttributes.drivmedel}
          />
          <SelectVehicleOptions
            label="Växellåda"
            value={selectedValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "transmission")}
            options={carAttributes.transmission}
          />

          <SelectVehicleOptions
            label="Märke"
            value={selectedValues.marken}
            changeHandler={(event) => changeHandler(event, "marken")}
            options={carAttributes.marken}
          />

          <SelectVehicleOptions
            label="Drivning"
            value={selectedValues.drive}
            changeHandler={(event) => changeHandler(event, "drive")}
            options={carAttributes.drive}
          />

          <SelectVehicleOptions
            label="Färg"
            value={selectedValues.colors}
            changeHandler={(event) => changeHandler(event, "colors")}
            options={carAttributes.colors}
          />
          <SelectVehicleOptions
            label="Skick"
            value={selectedValues.condition}
            changeHandler={(event) => changeHandler(event, "condition")}
            options={carAttributes.condition}
          />

          <SelectVehicleOptions
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
export default AddMoped;
