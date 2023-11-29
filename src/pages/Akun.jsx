import React, { useState } from 'react'
import pencil from '../assets/img/pencil.png'
import setting from '../assets/img/setting.png'
import cart from '../assets/img/cart.png'
import logout from "../assets/img/logout.png";
import picture from '../assets/img/picture.png'
import { Navbar } from '../assets/components/Navbar';
import { Profile } from '../assets/components/Profile';
import { Pembayaran } from '../assets/components/Pembayaran';
import { UbahPassword } from '../assets/components/UbahPassword';

export const Akun = () => {
  const [Akun, setAkun] = useState("profile")

  const handleProfile = (item) => {
    setAkun(item);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {Navbar()}
      <div className="flex justify-start space-x-2 px-[270px] mt-5">
        <div className="text-[#6148FF]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        </div>
        <p className="text-[#6148FF] font-bold">Kembali ke Beranda</p>
      </div>
      <div className="flex px-[300px] mt-8">
        <div className="relative flex flex-col bg-white border-[1.5px] border-[#6148FF] w-full h-[550px] bottom-5 rounded-xl z-0">
            <div className="flex w-full h-[8%] justify-center items-center rounded-tl-xl rounded-tr-xl bg-[#6148FF] text-white font-semibold tracking-[1px] z-10">Akun</div>
            <div className="flex w-full justify-around">
                <div className='flex flex-col gap-3 ml-4 mt-4 w-[18rem]'>
                    <div onClick={() => handleProfile("profile")} className='flex items-center space-x-3 cursor-pointer '>
                        {Akun === "profile" ? (
                            <div className='flex items-center space-x-3'>
                                <img className='w-5 h-5' src={pencil} alt=''></img>
                                <p className='font-bold text-[#6148FF] text-[15px]'>Profil Saya</p>
                            </div>
                        ) : (
                        <div className='flex items-center space-x-3'>
                            <img className='w-5 h-5' src={pencil} alt=''></img>
                            <p className='text-[12px] font-semibold'>Profil Saya</p>
                        </div>
                        )}                      
                    </div>
                    <hr></hr>
                    <div onClick={() => handleProfile("ubahpass")} className='flex items-center space-x-3 cursor-pointer'>
                        {Akun === "ubahpass" ? (
                            <div className='flex items-center space-x-3'>
                                <img className='w-5 h-5' src={setting} alt=''></img>
                                <p className='font-bold text-[#6148FF] text-[15px]'>Ubah Password</p>
                            </div>
                        ) : (
                        <div className='flex items-center space-x-3'>
                            <img className='w-5 h-5' src={setting} alt=''></img>
                            <p className='text-[12px] font-semibold'>Ubah Password</p>
                        </div>
                        )}   
                    </div>
                    <hr></hr>
                    <div onClick={() => handleProfile("pembayaran")} className='flex items-center space-x-3 cursor-pointer'>
                        {Akun === "pembayaran" ? (
                            <div className='flex items-center space-x-3'>
                                <img className='w-5 h-5' src={cart} alt=''></img>
                                <p className='font-bold text-[#6148FF] text-[15px]'>Riwayat Pembayaran</p>
                            </div>
                        ) : (
                        <div className='flex items-center space-x-3'>
                            <img className='w-5 h-5' src={cart} alt=''></img>
                            <p className='text-[12px] font-semibold'>Riwayat Pembayaran</p>
                        </div>
                        )}                      
                    </div>
                    <hr></hr>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={logout} alt=''></img>
                        <p className='text-[12px] font-semibold'>Keluar</p>
                    </div>
                    <hr></hr>
                    <p className='text-center text-[12px] text-gray-400 mt-4'>Version 1.1.0</p>
                </div>
                {/* Kanan */}
                {Akun === "profile" ? 
                    <Profile></Profile>
                :''}
                {Akun === "ubahpass" ? 
                    <UbahPassword></UbahPassword>
                :''}
                {Akun === "pembayaran" ? 
                    <Pembayaran></Pembayaran>
                :''}
                {/* Kanan */}
            </div>
        </div>
      </div>
    </div>
  )
}
