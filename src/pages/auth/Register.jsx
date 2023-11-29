import React, { useState } from "react";
import pass from "../../assets/svg/pass.svg";
import LogoBg from "../../assets/img/LogoBg.jpg";
import check from "../../assets/svg/check.svg";
export const Register = () => {
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
          Daftar
        </h1>

        <div className="flex flex-col items-center space-y-5">
          {/* INPUTAN NAMA */}
          <div className="flex flex-col relative">
            <label className="mb-1">Nama</label>
            <input
              className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
              placeholder="Nama Lengkap"
            />
          </div>

          {/*INPUTAN EMAIL*/}
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <div className="relative">
              <input
                className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
                placeholder="Contoh:sayahuman@gmail.com"
              />
              <img
                src={check}
                alt="check"
                className="top-[0.9rem] right-5 absolute"
              />
            </div>
          </div>

          {/*INPUTAN NO TELEPON*/}
          <div className="flex flex-col">
            <label className="mb-1">Nomor Telepon</label>
            <div className="relative">
              <input
                className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
                placeholder="+62"
              />
              <img
                src={check}
                alt="check2"
                className="top-[0.9rem] right-5 absolute"
              />
            </div>
          </div>

          {/*INPUTAN BUAT PASSWOR*/}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Buat Password</label>
            </div>
            <div className="relative">
              <input
                type={PasswordVisible ? "text" : "password"}
                value={inputPassword}
                onChange={handleInputChange}
                className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
                placeholder="Buat Password"
              />
              <img
                src={pass}
                alt="pass"
                className="top-3 right-5 absolute cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          {/*BUTTON REGISTER */}
          <button className="h-[3rem] w-[35rem] rounded-xl bg-gradientkanan text-white">
            Daftar
          </button>

          <span>
            Sudah punya akun?{" "}
            <a
              className="text-purple-800 font-semibold hover:underline"
              href="/"
            >
              Masuk di sini
            </a>
          </span>
        </div>
      </div>

      {/* SEBELAH KANAN */}
      {/* <div className="flex col-span-3 bg-gradientbawah justify-center items-center text-white">
        Logo
      </div> */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
