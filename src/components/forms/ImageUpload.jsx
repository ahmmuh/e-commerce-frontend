// ImageUpload.js
import React from 'react';
import {TextField} from "@mui/material";

function ImageUpload({ onChange }) {
    return (
    <TextField
        fullWidth
        type="file"
        accept="image/*"
        color="secondary"
        variant="outlined"
        onChange={(event) => onChange(event, "thumbnailImage")}
        sx={{marginBottom: ".4rem"}}
    />
    );
}

export default ImageUpload;
