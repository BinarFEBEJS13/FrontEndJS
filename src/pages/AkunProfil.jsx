import React from 'react'
import pencil from '../assets/img/pencil.png'
import setting from '../assets/img/setting.png'
import cart from '../assets/img/cart.png'
import logout from "../assets/img/logout.png";
import picture from '../assets/img/picture.png'
import { Navbar } from '../assets/components/Navbar';

export const AkunProfil = () => {
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
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={pencil} alt=''></img>
                        <p className='font-bold text-[#6148FF] text-[15px]'>Profil Saya</p>
                    </div>
                    <hr></hr>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={setting} alt=''></img>
                        <p className='text-[12px] font-semibold'>Ubah Password</p>
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
                {/* Kanan */}
                <div className='flex flex-col justify-center ml-4 mt-4 w-[18rem] px-5'>
                    <div className='relative'>
                        <div className='mx-auto w-[70px] h-[70px] bg-white outline outline-[#6148FF] rounded-full z-0'></div>
                        <div className='flex justify-center absolute left-[130px] bottom-0 z-10'>
                          <div className='flex items-center justify-center w-7 h-7 bg-white rounded-lg z-20'>
                            <img className='w-4 h-4 ' src={picture} alt=''></img>
                          </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-2'>
                      <div className=''>
                          <span className='text-[12px]'>Nama</span>
                          <input type='text' className='w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan nama Anda'></input>
                      </div>
                      <div>
                          <span className='text-[12px]'>Email</span>
                          <input type='text' className='w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan email Anda'></input>
                      </div>
                       <div>
                          <span className='text-[12px]'>Nomor Telepon</span>
                          <input type='text' className='w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan nomor telepon'></input>
                      </div>
                       <div>
                          <span className='text-[12px]'>Negara</span>
                          <input type='text' className='w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan kota tempat tinggal'></input>
                      </div>
                       <div>
                          <span className='text-[12px]'>Kota</span>
                          <input type='text' className='w-full p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan kota tempat tinggal'></input>
                      </div>
                      <div className='mt-2'>
                          <button className='w-full p-2 bg-[#6148FF] rounded-2xl text-white font-semibold text-sm tracking-[1px]'>Simpan profil saya</button>
                      </div>
                    </div>
                </div>
                {/* Kanan */}
            </div>
        </div>
      </div>
    </div>
  )
}
