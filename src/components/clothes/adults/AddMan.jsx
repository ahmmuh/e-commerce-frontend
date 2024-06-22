import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddMan = () => {
  const [cloth, setCloth] = useState({
    name: "",
    description: "",
    price: 0,
    // user,
    // category,
    // thumbnail: "",
  });
  const [selectedFile, setSelectedFile] = useState({
    thumbnail: "",
    images: [],
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const changeHandler = (e) => {
    // const { name, value } = e.target.value;
    setCloth({
      ...cloth,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const clothData = {
      name: cloth.name,
      description: cloth.description,
      images: cloth.images,
      price: cloth.price,
      // user,
      // category,
      thumbnail: selectedFile,
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
        onChange={changeHandler}
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
        onChange={changeHandler}
      />
      <TextField
        className="mb-2"
        fullWidth
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        variant="standard"
        id="images"
        name="images"
        value={selectedFile.images}
      />
      <TextField
        label="Price"
        className="mb-2"
        fullWidth
        type="number"
        variant="standard"
        id="price"
        name="price"
        onChange={changeHandler}
      />
      <TextField
        fullWidth
        type="file"
        accept="image/*"
        variant="standard"
        id="thumbnail"
        name="thumbnail"
        value={selectedFile.thumbnail}
        onChange={handleFileChange}
      />

      <Button variant="contained" className="mt-2" fullWidth type="submit">
        Contained
      </Button>
      <p>Vald fil: {selectedFile.name}</p>
    </form>
  );
};

export default AddMan;
