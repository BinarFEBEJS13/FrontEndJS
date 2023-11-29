import React, { useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import pass from "../../assets/svg/pass.svg";

export const Login = () => {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const handleInputChange = (event) => {
    setInputPassword(event.target.value);
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-2/3 flex flex-col justify-center">
        <h1 className="ml-[10.5rem] mb-[2rem] font-bold text-2xl text-purple-800">
          Masuk
        </h1>

        {/* INPUTAN EMAIL */}
        <div className="flex flex-col items-center space-y-5">
          <div className="flex flex-col">
            <label className="mb-1">Email/No Telepon</label>
            <input
              className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
              placeholder="Contoh:sayahuman@gmail.com"
            />
          </div>

          {/* INPUTAN PASSWORD */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Password</label>
              <a href="/" className="text-blue-500 hover:underline">
                Lupa Kata sandi
              </a>
            </div>
            <div className="relative">
              <input
                type={PasswordVisible ? "text" : "password"}
                value={inputPassword}
                onChange={handleInputChange}
                className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
                placeholder="Masukkan Password"
              />
              <img
                src={pass}
                alt="pass"
                className="top-3 right-5 absolute cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          {/* BUTTON LOGIN */}
          <button className="h-[3rem] w-[35rem] rounded-xl bg-gradientkanan text-white">
            Masuk
          </button>

          <span>
            Belum punya akun?{" "}
            <a
              className="text-purple-800 font-semibold hover:underline"
              href="/register"
            >
              Daftar di sini
            </a>
          </span>
        </div>
      </div>

      {/* SEBELAH KANAN */}
      {/* <div className="flex col-span-2 bg-gradientbawah justify-center items-center text-white">
        Logo
      </div> */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
