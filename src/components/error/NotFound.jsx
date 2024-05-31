import { Alert } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container ">
      <div className="row w-50 m-auto ">
        <Alert variant="outlined" sx={{ marginTop: "12rem" }} severity="error">
          Not found.
        </Alert>
        <Link to={"/"}>Back</Link>
      </div>
    </div>
  );
};

export default NotFound;
