import React, { useState } from "react";
import SelectMobile from "../../../reuseableComponents/forms/SelectMobile";
import { options } from "../../../data/mobile";
import { Button } from "@mui/material";

const Add = () => {
  const [selectedValues, setSelectedValues] = useState({
    batteryHealth: [],
    screenSize: [],
    color: [],
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
      <div className="row">
        <form>
          <SelectMobile
            label="Batterihälsa"
            value={selectedValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "batteryHealth")}
            options={options.batteryHealth}
          />
          <SelectMobile
            label="Skärmstorlek"
            value={selectedValues.screenSize}
            changeHandler={(event) => changeHandler(event, "screenSize")}
            options={options.screenSize}
          />

          <SelectMobile
            label="Färg"
            value={selectedValues.color}
            changeHandler={(event) => changeHandler(event, "color")}
            options={options.color}
          />
          <SelectMobile
            label="Skick"
            value={selectedValues.condition}
            changeHandler={(event) => changeHandler(event, "condition")}
            options={options.condition}
          />

          <SelectMobile
            label="Kvitto"
            value={selectedValues.receipt}
            changeHandler={(event) => changeHandler(event, "receipt")}
            options={options.receipt}
          />

          <SelectMobile
            label="Ägtid"
            value={selectedValues.ownershipDuration}
            changeHandler={(event) => changeHandler(event, "ownershipDuration")}
            options={options.ownershipDuration}
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

export default Add;
