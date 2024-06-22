import { Box, Button, TextField, capitalize } from "@mui/material";
import React, { useState } from "react";

const AddMan = () => {
  const [cloth, setCloth] = useState({
    name: "",
    description: "",
    price: 0,
    thumbnail: "",
    images: [],
  });

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log("Antal filer:", files.length); // Logga antalet filer
    const updatedImages = Array.from(files);
    console.log("Alla filer:", updatedImages); // Logga alla filer
    console.log("Andra filen:", updatedImages[1]); // Logga den andra filen

    setCloth((prevCloth) => ({
      ...prevCloth,
      thumbnail: updatedImages[0], // Första filen som thumbnail
      images: updatedImages.slice(1), // Resten av filerna som images
    }));
    console.log("updatedImages: ", updatedImages);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const clothData = {
      name: cloth.name,
      description: cloth.description,
      price: cloth.price,
      thumbnail: cloth.thumbnail,
      images: cloth.images,
      // user,
      // category,
    };
    console.log("New cloth was added: ", clothData);
  };

  return (
    <form id="clothForm" encType="multipart/form-data" onSubmit={submitHandler}>
      <TextField
        label="Namn"
        className="mb-2"
        fullWidth
        type="text"
        variant="standard"
        id="name"
        name="name"
        value={cloth.name}
        onChange={(e) => setCloth({ ...cloth, name: e.target.value })}
      />
      <TextField
        label="Description"
        className="mb-2"
        fullWidth
        type="text"
        multiline
        variant="standard"
        id="description"
        name="description"
        value={cloth.description}
        onChange={(e) => setCloth({ ...cloth, description: e.target.value })}
      />
      <TextField
        label="Price"
        className="mb-2"
        fullWidth
        type="number"
        variant="standard"
        id="price"
        name="price"
        onChange={(e) => setCloth({ ...cloth, price: e.target.value })}
      />
      <TextField
        fullWidth
        type="file"
        accept="image/*"
        variant="standard"
        id="thumbnail"
        name="thumbnail"
        onChange={handleFileChange}
      />
      <TextField
        className="mb-2"
        fullWidth
        type="file"
        accept="image/*"
        multiple
        variant="standard"
        id="images"
        name="images"
        onChange={handleFileChange}
      />

      <Button variant="contained" className="mt-2" fullWidth type="submit">
        Spara
      </Button>
      <p>Vald fil: {cloth.name}</p>
    </form>
  );
};

export default AddMan;
