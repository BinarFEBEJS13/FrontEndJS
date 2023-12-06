import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import { TableDashboard } from "../assets/components/TableDashboard";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login/>}></Route>
        <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
        <Route path="/admin/tabledashboard" element={<TableDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
