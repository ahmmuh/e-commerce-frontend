import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "../../../components/electronics/ipads/Add";
import Update from "../../../components/electronics/ipads/Update";
import Delete from "../../../components/electronics/ipads/Delete";
import Index from "../../../components/electronics/ipads/Index";

function IpadRoute() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="add" element={<Add />} />
      <Route path=":id" element={<Update />} />
      <Route path=":id" element={<Delete />} />
    </Routes>
  );
}

export default IpadRoute;
