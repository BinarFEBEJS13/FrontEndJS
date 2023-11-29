import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const UbahPassword = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
    
  return (
    <div className="flex flex-col justify-center ml-4 mt-4 w-[18rem] px-5">
      <h2 className="text-center font-extrabold">Ubah Password</h2>
      <div className="flex flex-col justify-center gap-2 mt-3">
        <div>
          <span className="text-[10px] font-semibold">
            Masukkan Password Lama
          </span>
          <div className="flex items-center justify-end">
            <input
              type={open === false ? "password" : "text"}
              className="w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[10px]"
              placeholder="Masukkan Password Lama"
            ></input>
            <span className="absolute mr-3 text-gray-500 text-[20px]">
              {open === false ? (
                <AiFillEyeInvisible onClick={toggle} />
              ) : (
                <AiFillEye onClick={toggle} />
              )}
            </span>
          </div>
        </div>
        <div>
          <span className="text-[10px] font-semibold">
            Masukkan Password Baru
          </span>
          <div className="flex items-center justify-end">
            <input
              type={open === false ? "password" : "text"}
              className="w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[10px]"
              placeholder="Masukkan Password Baru"
            ></input>
            <span className="absolute mr-3 text-gray-500 text-[20px]">
              {open === false ? (
                <AiFillEyeInvisible onClick={toggle} />
              ) : (
                <AiFillEye onClick={toggle} />
              )}
            </span>
          </div>
        </div>
        <div>
          <span className="text-[10px] font-semibold">
            Ulangi Password Baru
          </span>
          <div className="flex items-center justify-end">
            <input
              type={open === false ? "password" : "text"}
              className="w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[10px]"
              placeholder="Ulangi Password Baru"
            ></input>
            <span className="absolute mr-3 text-gray-500 text-[20px]">
              {open === false ? (
                <AiFillEyeInvisible onClick={toggle} />
              ) : (
                <AiFillEye onClick={toggle} />
              )}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full p-2 bg-ungu-0 rounded-2xl text-white font-semibold text-[12px] tracking-[1px] shadow-lg shadow-gray-200">
            Ubah Password
          </button>
        </div>
      </div>
    </div>
  );
};
