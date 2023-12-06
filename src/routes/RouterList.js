import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { KelasSaya } from "../pages/KelasSaya";
import { DetailKelas } from "../pages/DetailKelas";
import { Pembayaran } from "../pages/Pembayaran";
import { Success } from "../pages/Success";
import { Kursus } from "../pages/Kursus";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/kursus" element={<Kursus />}></Route>
        <Route path="/kelassaya" element={<KelasSaya />}></Route>
        <Route path="/detail-kelas" element={<DetailKelas />}></Route>
        <Route path="/pembayaran" element={<Pembayaran />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
