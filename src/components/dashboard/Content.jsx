import React from "react";
import Navbar from "../menu/Navbar";
import {
  containerStyle,
  leftAndContentBAckgroundColor,
} from "../globalStyles/containerStyle";
import ChartCard from "../../reuseableComponents/ChartCard";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LeftSidebar from "./LeftSidebar";

function Content() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return <div>Content</div>;
}

export default Content;
