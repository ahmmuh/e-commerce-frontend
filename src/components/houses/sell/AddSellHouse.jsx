import React, { useState } from "react";
import SelectHouseOptions from "../../../reuseableComponents/forms/SelectHouseOptions";
import { Box, Button, TextField } from "@mui/material";
import { houseAttributes } from "../../../basicData/houses/houseAttributes";
import { Home } from "@mui/icons-material";

const AddSellHouse = () => {
  const [selectedValues, setSelectedValues] = useState({
    name: "",
    fastighetstyper: [],
    affarstyper: [],
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
        Sälj/hyr bostad <Home />{" "}
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
          <SelectHouseOptions
            label="Fastyghetstyp"
            value={selectedValues.fastighetstyper}
            changeHandler={(event) => changeHandler(event, "fastighetstyper")}
            options={houseAttributes.fastighetstyper}
          />
          <SelectHouseOptions
            label="Affärstyper"
            value={selectedValues.screenSize}
            changeHandler={(event) => changeHandler(event, "affarstyper")}
            options={houseAttributes.affarstyper}
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

export default AddSellHouse;
