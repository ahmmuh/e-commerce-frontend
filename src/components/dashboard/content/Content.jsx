import React from "react";
import Navbar from "../../menu/Navbar";
import {
  containerStyle,
  leftAndContentBAckgroundColor,
} from "../../globalStyles/containerStyle";
import ChartCard from "../../../reuseableComponents/ChartCard";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LeftSidebar from "../../sidebars/LeftSidebar";

function Content() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="container " style={containerStyle}>
      <Navbar />
      <Box flexDirection="row" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <LeftSidebar />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <ChartCard
                title="Total Orders"
                total={4400}
                icon={<i className="bi bi-cart-fill"></i>}
              />

              <ChartCard
                title="Total Sales"
                total={5000}
                icon={<i className="bi bi-cart-fill"></i>}
              />
              <ChartCard
                title="Total users"
                total={1200}
                icon={<i className="bi bi-cart-fill"></i>}
              />
              <ChartCard
                title="Total Products"
                total={6033}
                icon={<i className="bi bi-cart-fill"></i>}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Content;
