import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { OTP } from "../pages/auth/OTP";
import { ResetPass } from "../pages/auth/ResetPass";
import { BerandaCoba } from "../pages/auth/BerandaCoba";
import { Home } from "../pages/Home";
import { App } from "../pages/App";
import { AkunProfil } from "../pages/AkunProfil";
import { AkunPassword } from "../pages/AkunPassword";
import { AkunPembayaran } from "../pages/AkunPembayaran";
import { Akun } from "../pages/Akun";
import { Coba } from "../pages/coba";
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="/" element={<App />}></Route>
        <Route path="/coba" element={<Coba />}></Route>
        <Route path="/akun" element={<Akun />}></Route>
        <Route path="/profil" element={<AkunProfil />}></Route>
        <Route path="/ubah" element={<AkunPassword />}></Route>
        <Route path="/bayar" element={<AkunPembayaran />}></Route>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/admin/login" element={<Login />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/tabledashboard" element={<TableDashboard />}></Route>
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
