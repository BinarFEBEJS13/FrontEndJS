import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { App } from "../pages/App";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import { TableDashboard } from "../assets/components/TableDashboard";
import { TableKelas } from "../assets/components/TableKelas";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/admin/login" element={<Login/>}></Route>
        <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
        <Route path="/admin/tabledashboard" element={<TableDashboard/>}></Route>
        <Route path="/admin/tablekelas" element={<TableKelas/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
