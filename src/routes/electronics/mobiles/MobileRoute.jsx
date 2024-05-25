import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "../../../components/electronics/mobiles/Add";
import Delete from "../../../components/electronics/mobiles/Delete";
import Update from "../../../components/electronics/mobiles/Update";
import Index from "../../../components/electronics/mobiles/Index";

function MobileRoute() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="add" element={<Add />} />
      <Route path=":id" element={<Update />} />
      <Route path=":id" element={<Delete />} />
    </Routes>
  );
}

export default MobileRoute;
