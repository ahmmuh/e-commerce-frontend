import React from "react";
import Index from "../../../components/electronics/laptops/Index";
import Add from "../../../components/electronics/laptops/Add";
import Update from "../../../components/electronics/laptops/Update";
import Delete from "../../../components/electronics/laptops/Delete";
import { Route, Routes } from "react-router-dom";

function LaptopRoute() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="add" element={<Add />} />
      <Route path=":id" element={<Update />} />
      <Route path=":id" element={<Delete />} />
    </Routes>
  );
}

export default LaptopRoute;
