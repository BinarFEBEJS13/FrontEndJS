import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { OTP } from "../pages/auth/OTP";
import { ResetPass } from "../pages/auth/ResetPass";
import { BerandaCoba } from "../pages/auth/BerandaCoba";
// import { Home } from "../pages/Home";
// import { App } from "../pages/App";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/otp' element={<OTP/>}/>
        <Route path='/reset' element={<ResetPass/>}/>
        <Route path='/brnd' element={<BerandaCoba/>}/>
        {/* <Route path="/" element={<App />}></Route> */}
        {/* <Route path="/home" element={<Home />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
