import { AccountCircle, BorderHorizontal } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";

const AddGirl = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ margin: "1rem" }}>
      <Stack spacing={2}>
        <form>
          <div className="mb-2">
            <label htmlFor="productName"></label>
            <TextField
              type="text"
              label="Product name"
              variant="standard"
              fullWidth
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Beskrivning"></label>
            <TextField
              type="text"
              multiline
              label="Beskrivning"
              variant="standard"
              fullWidth
              rows={2}
              maxRows={4}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="Pris"></label>
            <TextField
              type="number"
              label="Pris"
              variant="standard"
              size="small"
              value={value}
              onChange={(e) =>
                setValue(e.target.value < 0 ? 0 : e.target.value)
              }
            />
          </div>

          <div className="mb-2">
            <TextField fullWidth variant="standard" type="file" />
          </div>
        </form>
      </Stack>
    </Box>
  );
};

export default AddGirl;
