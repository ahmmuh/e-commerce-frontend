import React, { useEffect, useState } from "react";
import SelectElectronicOption from "../../../reuseableComponents/forms/SelectElectronicOption";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { mobileOptionsBasicData } from "../../../basicData/electronics/mobiles/mobile";
import { Save } from "@mui/icons-material";
import { getCategories, getElectronics } from "../../../backend/api";

const AddMobile = () => {
  const [categories, setCategories] = useState([]);
  const [electronicValues, setElectronicValues] = useState({
    name: "",
    batteryHealth: [],
    screenSize: [],
    images: [],
    colors: [],
    condition: [],
    receipt: [],
    ownershipDuration: [],
    price: 0,
    description: "",
    categories: "",
    location: {},
    file: "",
    // user: "",
    // selectedCategory: "",
  });

  const changeHandler = (e, category) => {
    e.preventDefault();
    setElectronicValues({
      ...electronicValues,
      [category]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const fetchElectronics = async () => {
    const data = await getElectronics();
    console.log("Electronic values: ", data);
    setElectronicValues(data);
  };
  useEffect(() => {
    fetchElectronics();
  }, []);

  return (
    <div className="container mt-2 mb-5">
      <div className="col">
        <h3 className="lead">
          Sälj telefon <PhoneIphoneIcon />
        </h3>
        <Box component="form" noValidate autoComplete="off">
          <InputLabel htmlFor="name" shrink></InputLabel>
          <TextField
            fullWidth
            value={electronicValues.name}
            variant="filled"
            id="name"
            label="Namn"
            onChange={(event) => changeHandler(event)}
            sx={{ marginBottom: ".4rem" }}
          />

          <TextField
            fullWidth
            id="standard-basic"
            label="Pris"
            value={electronicValues.price}
            variant="filled"
            onChange={(event) => changeHandler(event)}
            sx={{ marginBottom: ".4rem" }}
          />
          <TextField
            label="Description"
            fullWidth
            name="description"
            minRows={4}
            maxRows={4}
            multiline
            variant="filled"
            value={electronicValues.description}
            onChange={(event) => changeHandler(event)}
            sx={{ marginBottom: ".4rem" }}
          />
          <TextField
            fullWidth
            name="file"
            type="file"
            color="secondary"
            variant="outlined"
            value={electronicValues.file}
            sx={{ marginBottom: ".4rem" }}
          />

          <SelectElectronicOption
            label="Batterihälsa"
            variant="filled"
            name="batteryHealth"
            value={electronicValues.batteryHealth}
            changeHandler={(event) => changeHandler(event, "batteryHealth")}
            data={mobileOptionsBasicData.batteryHealth}
          />
          <SelectElectronicOption
            label="Skärmstorlek"
            variant="filled"
            name="screenSize"
            value={electronicValues.screenSize}
            changeHandler={(event) => changeHandler(event, "screenSize")}
            data={mobileOptionsBasicData.screenSize}
          />

          <SelectElectronicOption
            label="Färg"
            variant="filled"
            name="colors"
            value={electronicValues.colors}
            changeHandler={(event) => changeHandler(event, "colors")}
            data={mobileOptionsBasicData.colors}
          />
          <SelectElectronicOption
            label="Skick"
            name="condition"
            value={electronicValues.condition}
            variant="filled"
            changeHandler={(event) => changeHandler(event, "condition")}
            data={mobileOptionsBasicData.condition}
          />

          <SelectElectronicOption
            label="Kvitto"
            variant="filled"
            name="receipt"
            value={electronicValues.receipt}
            changeHandler={(event) => changeHandler(event, "receipt")}
            data={mobileOptionsBasicData.receipt}
          />

          <SelectElectronicOption
            variant="filled"
            label="Ägtid"
            name="ownershipDuration"
            value={electronicValues.ownershipDuration}
            changeHandler={(event) => changeHandler(event, "ownershipDuration")}
            data={mobileOptionsBasicData.ownershipDuration}
          />

          <Button
            endIcon={<Save />}
            onClick={submitHandler}
            variant="contained"
            sx={{ width: "12rem", borderRadius: "4rem" }}
            size="large"
          >
            Spara
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default AddMobile;
