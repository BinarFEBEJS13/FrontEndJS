import React, { useState } from 'react'
import LogoBg from "../../assets/img/LogoBg.jpg";
import pass from "../../assets/svg/pass.svg";

export const ResetPass = () => {
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const password = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const password2 = () => {
    setPassword2Visible((prevVisible) => !prevVisible);
  };
  
  return (
    <div className="flex flex-row w-full h-screen">
    {/* SEBELAH KIRI */}
    <div className="w-2/3 flex flex-col justify-center">
      <h1 className="ml-[10.5rem] mb-[2rem] font-bold text-2xl text-purple-800">
        Reset Password
      </h1>

      {/* INPUTAN EMAIL */}
      <div className="flex flex-col items-center space-y-5">
        <div className="flex flex-col">
        <div className="flex justify-between items-center mb-1">
            <label>Masukan Password Baru</label>
          </div>

        {/* INPUTAN PASSWORD */}
          <div className="relative">
            <input
            type={passwordVisible ? 'text' : 'password'}
              className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
              placeholder="Masukan Password"
            />
            <img src={pass} alt="pass" className="top-3 right-5 absolute" 
            onClick={password}/>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-1">
            <label>Ulangi Password Baru</label>
          </div>

          <div className="relative">
            <input
            type={password2Visible ? 'text' : 'password'}
              className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
              placeholder="Masukan Password"
            />
            <img src={pass} alt="pass" className="top-3 right-5 absolute"
            onClick={password2} />
          </div>

        </div>

        {/* BUTTON LOGIN */}
        <button className="h-[3rem] w-[35rem] rounded-xl bg-gradientkanan text-white">
          Simpan
        </button>
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
  )
}
