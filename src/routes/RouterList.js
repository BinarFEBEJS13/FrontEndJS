import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Akun } from "../pages/Akun";
import { Notifikasi } from "../pages/Notifikasi";
import { AkunProfile, Coba } from "../pages/AkunProfile";
import { AkunPassword } from "../pages/AkunPassword";
import { AkunPembayaran } from "../pages/AkunPembayaran";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/notifikasi" element={<Notifikasi />}></Route>
        <Route path="/akun" element={<Akun />}></Route>
        <Route path="/akun/profile" element={<AkunProfile />}></Route>
        <Route path="/akun/change-password" element={<AkunPassword />}></Route>
        <Route path="/akun/transaction" element={<AkunPembayaran />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
