import React, { useState } from 'react'
import { Navbar } from '../assets/components/Navbar'
import pencil from '../assets/img/pencil.png'
import setting from '../assets/img/setting.png'
import cart from '../assets/img/cart.png'
import logout from "../assets/img/logout.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const AkunPassword = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
      setOpen(!open);
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
        <div className="relative flex flex-col bg-white border-[1.5px] border-biru-0 w-full h-[400px] bottom-5 rounded-xl z-0">
            <div className="flex w-full h-[13%] justify-center items-center rounded-tl-xl rounded-tr-xl bg-biru-0 text-white font-semibold tracking-[1px] z-10">Akun</div>
            <div className="flex w-full justify-around">
                <div className='flex flex-col gap-3 ml-4 mt-4 w-[18rem]'>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={pencil} alt=''></img>
                        <p className='text-[12px] font-semibold'>Profil Saya</p>
                    </div>
                    <hr></hr>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={setting} alt=''></img>
                        <p className='font-bold text-[#6148FF] text-[15px]'>Ubah Password</p>
                    </div>
                    <hr></hr>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={cart} alt=''></img>
                        <p className='text-[12px] font-semibold'>Riwayat Pembayaran</p>
                    </div>
                    <hr></hr>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={logout} alt=''></img>
                        <p className='text-[12px] font-semibold'>Keluar</p>
                    </div>
                    <hr></hr>
                    <p className='text-center text-[12px] text-gray-400 mt-4'>Version 1.1.0</p>
                </div>
                <div className='flex flex-col justify-center ml-4 mt-4 w-[18rem] px-5'>
                    <h2 className='text-center font-extrabold'>Ubah Password</h2>
                    <div className='flex flex-col justify-center gap-2 mt-3'>
                      <div>
                          <span className='text-[10px] font-semibold'>Masukkan Password Lama</span>
                          <div className='flex items-center justify-end'>
                            <input type={(open === false) ? 'password' : 'text'} className='w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[10px]' placeholder='Masukkan Password Lama'></input>
                            <span className='absolute mr-3 text-gray-500 text-[20px]'>{(open === false ) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle}/>}</span>
                          </div>
                      </div>
                      <div>
                          <span className='text-[10px] font-semibold'>Masukkan Password Baru</span>
                          <div className='flex items-center justify-end'>
                            <input type={(open === false) ? 'password' : 'text'} className='w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[10px]' placeholder='Masukkan Password Baru'></input>
                            <span className='absolute mr-3 text-gray-500 text-[20px]'>{(open === false ) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle}/>}</span>
                          </div>
                      </div>
                       <div>
                          <span className='text-[10px] font-semibold'>Ulangi Password Baru</span>
                          <div className='flex items-center justify-end'>
                            <input type={(open === false) ? 'password' : 'text'} className='w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[10px]' placeholder='Ulangi Password Baru'></input>
                            <span className='absolute mr-3 text-gray-500 text-[20px]'>{(open === false ) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle}/>}</span>
                          </div>
                      </div>
                      <div className='mt-4'>
                          <button className='w-full p-2 bg-ungu-0 rounded-2xl text-white font-semibold text-[12px] tracking-[1px] shadow-lg shadow-gray-200'>Ubah Password</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
