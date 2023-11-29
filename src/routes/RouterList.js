import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { App } from "../pages/App";
import { AkunProfil } from "../pages/AkunProfil";
import { AkunPassword } from "../pages/AkunPassword";
import { AkunPembayaran } from "../pages/AkunPembayaran";
import { Akun } from "../pages/Akun";
import { Coba } from "../pages/coba";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/coba" element={<Coba />}></Route>
        <Route path="/akun" element={<Akun />}></Route>
        <Route path="/profil" element={<AkunProfil />}></Route>
        <Route path="/ubah" element={<AkunPassword />}></Route>
        <Route path="/bayar" element={<AkunPembayaran />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
