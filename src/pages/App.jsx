import React from "react";
import { Navbar } from "../assets/components/Navbar";

export const App = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      {Navbar()}
      <div className="flex justify-start space-x-2 px-[300px] mt-5">
        <div className="text-[#6148FF]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        </div>
        <p className="text-[#6148FF] font-bold">Kembali ke Beranda</p>
      </div>
      <div className="flex px-[320px] mt-5">
        <div className="flex flex-col bg-white border-[1.5px] border-[#6148FF] w-full h-[300px] rounded-xl z-0">
            <div className="flex w-full h-[15%] justify-center items-center rounded-tl-xl rounded-tr-xl bg-biru-0 text-white font-semibold tracking-[1px] z-10">Notifikasi</div>
            <div className="flex w-full justify-around px-[50px]">
              <div className="flex flex-row space-x-2 mt-5">
                <div className="flex justify-center items-center w-4 h-4 rounded-full bg-[#6148FF] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <div className="flex flex-col text-[10px]">
                  <p className="text-[#6148FF]">Promosi</p>
                  <p className="font-bold">Dapatkan potongan 50% selama bulan Maret!</p>
                  <p className="text-gray-400">Syarat dan Ketentuan berlaku!</p>
                </div>
              </div>
              <div className="flex flex-row mt-5 space-x-1">
                <p className="text-[10px] font-medium text-gray-400">2 Maret, 12.00</p>
                <div className="w-2 h-2 bg-green-300 rounded-full mt-[3px]"></div>
              </div>
            </div>
            <div className="flex w-full justify-around">
              <div className="flex flex-row space-x-2 mt-5">
                <div className="flex justify-center items-center w-4 h-4 rounded-full bg-[#6148FF] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <div className="flex flex-col text-[10px]">
                  <p className="text-[#6148FF]">Promosi</p>
                  <p className="font-bold">Password berhasil diubah</p>
                </div>
              </div>
              <div className="flex flex-row mt-5 space-x-1">
                <p className="text-[10px] font-medium text-gray-400">1 Maret, 10.00</p>
                <div className="w-2 h-2 bg-red-500 rounded-full mt-[3px]"></div>
              </div>
            </div>
            <div className="flex w-full justify-around px-[50px]">
              <div className="flex flex-row space-x-2 mt-5">
                <div className="flex justify-center items-center w-4 h-4 rounded-full bg-[#6148FF] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <div className="flex flex-col text-[10px]">
                  <p className="text-[#6148FF]">Promosi</p>
                  <p className="font-bold">Dapatkan potongan 50% selama bulan Maret!</p>
                  <p className="text-gray-400">Syarat dan Ketentuan berlaku!</p>
                </div>
              </div>
              <div className="flex flex-row mt-5 space-x-1">
                <p className="text-[10px] font-medium text-gray-400">1 Maret, 09.00</p>
                <div className="w-2 h-2 bg-green-300 rounded-full mt-[3px]"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
