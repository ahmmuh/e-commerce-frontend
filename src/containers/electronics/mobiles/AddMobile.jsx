import React, {useEffect, useState} from "react";
import SelectElectronicOption from "../../../components/forms/SelectElectronicOption";
import {Box, Button, InputLabel, TextField,} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import {mobileOptionsBasicData} from "../../../basicData/electronics/mobiles/mobile";
import {Save} from "@mui/icons-material";
import {addElectronic, getCategories, getElectronics,} from "../../../backend/api.js";
import ImageUpload from "../../../components/forms/ImageUpload";
import axios from "axios";

const base_url = "http://localhost:5000/api";

const AddMobile = () => {
  const [categories, setCategories] = useState([]);
  const [electronicValues, setElectronicValues] = useState({
    name: "",
    batteryHealth: [],
    screenSize: [],
    // images: [],
    colors: [],
    condition: [],
    receipt: [],
    ownershipDuration: [],
    price: 0,
    description: "",
   thumbnailImage: null,
    // category: "6664145f5ec3486d853c93af",
    // location: {},
    // user: "66407a5a4cb15e6a95677473",
    // selectedCategory: "",
  });

  // const changeHandler = (e, category) => {
  //   e.preventDefault();
  //   if (e.target.files && e.target.files[0]) {
  //     const fileURL = URL.createObjectURL(e.target.files[0]);
  //     setElectronicValues({
  //       ...electronicValues,
  //       thumbnailImage: fileURL,
  //       [category]: e.target.value,
  //     });
  //   }
  // };

  const changeHandler = (e, category) => {
    e.preventDefault();
    // Kontrollera om det är en filuppladdning
    if (category === "thumbnailImage" && e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setElectronicValues({
        ...electronicValues,
        thumbnailImage: fileURL,
      });
    } else {
      // Hantera uppdatering av andra fält
      setElectronicValues({
        ...electronicValues,
        [category]: e.target.value,
      });
    }
  };

  const submitHandler = async (e) => {
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
      thumbnailImage: electronicValues.thumbnailImage,
      // category: electronicValues.category,
      // user: electronicValues.user,
    };


    //console.log("new data fore servern: ",newDevice)

    const response = await addElectronic(newDevice)
    if (response){
      console.log("Response: ", JSON.parse(response.config.data))

    }
  else {
    console.log("Nothing here")
    }
  };

  const fetchElectronics = async () => {
    const data = await getElectronics();
    //console.log("Electronic values: ", data);
    setElectronicValues(data);
  };
  useEffect(() => {
    fetchElectronics();
  }, []);

  const filterCategories = async () => {
    const data = await getCategories();
  //  console.log("Categories: ", data);
    setCategories(data);
  };

  useEffect(() => {
    filterCategories();
  }, []);

  return (
      <div className="container mt-2 mb-5">
        <div className="col">
          <h3 className="lead text-uppercase">
            Sälj telefon <PhoneIphoneIcon/>
          </h3>
          <Box component="form" noValidate autoComplete="off">
            <InputLabel htmlFor="name" shrink></InputLabel>
            <TextField
                fullWidth
                value={electronicValues.name ?? ""}
                variant="filled"
                id="name"
                label="Namn"
                name="name"
                onChange={(event) => changeHandler(event, "name")}
                sx={{marginBottom: ".4rem"}}
            />

            <TextField
                fullWidth
                id="price"
                label="Pris"
                name="price"
                value={electronicValues.price ?? ""}
                variant="filled"
                onChange={(event) => changeHandler(event, "price")}
                sx={{marginBottom: ".4rem"}}
            />
            <TextField
                label="Description"
                fullWidth
                name="description"
                minRows={4}
                maxRows={4}
                multiline
                id="description"
                variant="filled"
                value={electronicValues.description ?? ""}
                onChange={(event) => changeHandler(event, "description")}
                sx={{marginBottom: ".4rem"}}
            />

            <ImageUpload
                onChange={(event) => changeHandler(event, "thumbnailImage")}

            />
          {/*  <TextField
                fullWidth
                type="file"
                accept="image/*"
                color="secondary"
                 variant="outlined"
                onChange={(event) => changeHandler(event, "thumbnailImage")}
                sx={{marginBottom: ".4rem"}}
            />*/}

            {/* <Box sx={{ marginBottom: ".3rem" }}>
            <Select
              fullWidth
              name="category"
              id="category"
              variant="filled"
              value={electronicValues.category}
              onChange={(event) => changeHandler(event, "category")}
            >
              <MenuItem value="selected">Välj kategori</MenuItem>
              {categories &&
                categories.map((c) => (
                  <MenuItem key={c._id}>{c.name}</MenuItem>
                ))}
            </Select>
          </Box> */}

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
                endIcon={<Save/>}
                onClick={submitHandler}
                variant="contained"
                sx={{width: "12rem", borderRadius: "4rem"}}
                size="large"
            >
              Spara
            </Button>
          </Box>
        </div>
        {
          electronicValues.thumbnailImage ?
              <img src={electronicValues.thumbnailImage} width={150} height={150}  alt="Min bild"/>: "No bild"
        }

      </div>
  );
};

export default AddMobile;
