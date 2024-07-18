import React, { useState, useEffect } from "react";
import SelectHouseOptions from "../../../components/forms/SelectHouseOptions";
import { Box, Button, Chip, Stack, TextField } from "@mui/material";
import { houseAttributes } from "../../../basicData/houses/houseAttributes";
import { Home } from "@mui/icons-material";

const AddSellHouse = () => {
  const [selectedValues, setSelectedValues] = useState({
    name: "",
    fastighetstyper: [],
    affarstyper: [],
    teknik: [],
    populara: [],
    kok: [],
    parkeringOchHjalpmedel: [],
  });
  const [selectItem, setSelectItem] = useState([]);
  const [displaySelectedItem, setSelectedDisplayItem] = useState(false);
  const changeHandler = (e, category) => {
    const value = e.target.value;
    let newSelection = [];

    if (selectedValues[category].includes(value)) {
      newSelection = selectedValues[category].filter((item) => item !== value);
    } else {
      newSelection = [...selectedValues[category], value];
    }
    setSelectedValues({
      ...selectedValues,
      [category]: newSelection,
    });
  };

  useEffect(() => {
    setSelectedValues(selectedValues);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Mobile values ", selectedValues);
  };

  return (
    <div className="container mt-2">
      <h5 className="text-primary">
        Sälj bostad <Home />{" "}
      </h5>
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

          <SelectHouseOptions
            label="Köks delar"
            value={selectedValues.kok}
            changeHandler={(event) => changeHandler(event, "kok")}
            options={houseAttributes.kok}
          />

          <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
            {selectedValues.kok.map((k) => (
              <>
                <Chip label={k} color="primary" variant="outlined" />
              </>
            ))}
          </Stack>

          <SelectHouseOptions
            label="Teknik"
            value={selectedValues.teknik}
            changeHandler={(event) => changeHandler(event, "teknik")}
            options={houseAttributes.teknik}
          />

          <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
            {selectedValues.teknik.map((t) => (
              <>
                <Chip label={t} color="primary" variant="outlined" />
              </>
            ))}
          </Stack>

          <SelectHouseOptions
            label="Populära"
            value={selectedValues.populara}
            changeHandler={(event) => changeHandler(event, "populara")}
            options={houseAttributes.populara}
          />

          <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
            {selectedValues.populara.map((p) => (
              <>
                <Chip label={p} color="primary" variant="outlined" />
              </>
            ))}
          </Stack>

          <SelectHouseOptions
            label="Parkering och hjälpmedel"
            value={selectedValues.parkeringOchHjalpmedel}
            changeHandler={(event) =>
              changeHandler(event, "parkeringOchHjalpmedel")
            }
            options={houseAttributes.parkeringOchHjalpmedel}
          />

          <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
            {selectedValues.parkeringOchHjalpmedel.map((t) => (
              <>
                <Chip label={t} color="primary" variant="outlined" />
              </>
            ))}
          </Stack>
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
