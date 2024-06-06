import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

const AddBoat = () => {
  return (
    <Box component={"section"} sx={{ p: "1rem" }}>
      <Typography>Fill följande för att kunna sälja din boat</Typography>
      <FormControl fullWidth>
        <TextField type="text" label="Namn" variant="standard" />
        <TextField type="text" fullWidth label="Modell" variant="standard" />
        <TextField type="text" label="Beskrivning" variant="standard" />
        <TextField type="file" label="Bild" variant="standard" />
        <TextField type="number" label="Pris" variant="standard" />
        <Button type="submit" variant="contained" sx={{ marginTop: "1rem" }}>
          Spara
        </Button>
      </FormControl>
    </Box>
  );
};
export default AddBoat;
