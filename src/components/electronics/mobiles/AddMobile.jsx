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
import {
  addElectronic,
  getCategories,
  getElectronics,
} from "../../../backend/api";
import axios from "axios";

const base_url = "http://localhost:5000/api";

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
    category: "",
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
    const newDevice = {
      name: electronicValues.name,
      batteryHealth: electronicValues.batteryHealth,
      screenSize: electronicValues.screenSize,
      colors: electronicValues.colors,
      condition: electronicValues.condition,
      receipt: electronicValues.receipt,
      ownershipDuration: electronicValues.ownershipDuration,
      price: electronicValues.price,
      description: electronicValues.description,
      file: electronicValues.file,
      category: electronicValues.category,
    };

    axios
      .post("http://localhost:5000/api/electronics", newDevice)
      .then((response) => {
        console.log(response.status, response.data);
      });
  };

  const fetchElectronics = async () => {
    const data = await getElectronics();
    console.log("Electronic values: ", data);
    setElectronicValues(data);
  };
  useEffect(() => {
    fetchElectronics();
  }, []);

  const filterCategories = async () => {
    const data = await getCategories();
    console.log("Categories: ", data);
    setCategories(data);
  };

  useEffect(() => {
    filterCategories();
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
            onChange={(event) => changeHandler(event, "name")}
            sx={{ marginBottom: ".4rem" }}
          />

          <TextField
            fullWidth
            id="standard-basic"
            label="Pris"
            value={electronicValues.price}
            variant="filled"
            onChange={(event) => changeHandler(event, "price")}
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
            value={electronicValues?.description}
            onChange={(event) => changeHandler(event, "description")}
            sx={{ marginBottom: ".4rem" }}
          />
          <TextField
            fullWidth
            name="file"
            type="file"
            color="secondary"
            variant="outlined"
            value={electronicValues?.file}
            sx={{ marginBottom: ".4rem" }}
            onChange={(event) => changeHandler(event, "file")}
          />

          <Box sx={{ marginBottom: ".3rem" }}>
            <Select
              fullWidth
              onChange={(event) => changeHandler(event, "category")}
              name="category"
              id="category"
              variant="filled"
              value={electronicValues.category}
            >
              <MenuItem value="selected">Välj kategori</MenuItem>
              {categories &&
                categories.map((c) => (
                  <MenuItem value={c._id}>{c.name}</MenuItem>
                ))}
            </Select>
          </Box>

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
