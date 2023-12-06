import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Akun } from "../pages/Akun";
import { Notifikasi } from "../pages/Notifikasi";
import { AkunProfile, Coba } from "../pages/AkunProfile";
import { AkunPassword } from "../pages/AkunPassword";
import { AkunPembayaran } from "../pages/AkunPembayaran";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import { TableDashboard } from "../assets/components/TableDashboard";
import { TableKelas } from "../assets/components/TableKelas";
import { Navbar } from "../assets/components/Navbar";
import { Beranda } from "../pages/Beranda";
import { BerandaKelasSaya } from "../pages/BerandaKelasSaya";
import { DetailKelas } from "../pages/DetailKelas";
import { KelasPremium } from "../assets/components/KelasPremium";
import { Pembayaran } from "../pages/Pembayaran";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/notifikasi" element={<Notifikasi />}></Route>
        <Route path="/akun" element={<Akun />}></Route>
        <Route path="/akun/profile" element={<AkunProfile />}></Route>
        <Route path="/akun/change-password" element={<AkunPassword />}></Route>
        <Route path="/akun/transaction" element={<AkunPembayaran />}></Route>
        <Route path="/profil" element={<AkunProfile />}></Route>
        <Route path="/ubah" element={<AkunPassword />}></Route>
        <Route path="/bayar" element={<AkunPembayaran />}></Route>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/admin/login" element={<Login />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/admin/tabledashboard"
          element={<TableDashboard />}
        ></Route>
        <Route path="/admin/tablekelas" element={<TableKelas />}></Route>
        <Route path="/beranda" element={<Beranda />}></Route>
        <Route path="/beranda/kelassaya" element={<BerandaKelasSaya />}></Route>
        <Route path="/detail-kelas" element={<DetailKelas />}></Route>
        <Route path="/premium" element={<KelasPremium />}></Route>
        <Route path="/pembayaran" element={<Pembayaran />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
