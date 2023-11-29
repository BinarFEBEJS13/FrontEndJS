import React, { useState } from 'react'
import { Navbar } from '../assets/components/Navbar'
import pencil from '../assets/img/pencil.png'
import setting from '../assets/img/setting.png'
import cart from '../assets/img/cart.png'
import logout from "../assets/img/logout.png";
import imagepayment from '../assets/img/image_payment.png'

// svg
import star from '../assets/svg/star.svg'
import clock from "../assets/svg/clock.svg";
import book from "../assets/svg/book.svg";
import badge from "../assets/svg/badge.svg";
import diamond from "../assets/svg/diamond.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const AkunPembayaran = () => {
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
        <div className="relative flex flex-col bg-white border-[1.5px] border-biru-0 w-full h-[550px] bottom-5 rounded-xl z-0">
            <div className="flex w-full h-[8%] justify-center items-center rounded-tl-xl rounded-tr-xl bg-biru-0 text-white font-semibold tracking-[1px] z-10">Akun</div>
            <div className="flex w-full justify-around">
                <div className='flex flex-col gap-3 ml-4 mt-4 w-[18rem]'>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={pencil} alt=''></img>
                        <p className='text-[12px] font-semibold'>Profil Saya</p>
                    </div>
                    <hr></hr>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={setting} alt=''></img>
                        <p className='text-[12px] font-semibold'>Ubah Password</p>
                    </div>
                    <hr></hr>
                    <div className='flex items-center space-x-3 '>
                        <img className='w-5 h-5' src={cart} alt=''></img>
                        <p className='font-bold text-[#6148FF] text-[15px]'>Riwayat Pembayaran</p>
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
                <div className='flex flex-col  ml-4 mt-4 w-[18rem] px-5'>
                    <h2 className='text-center font-extrabold'>Riwayat Pembayaran</h2>
                    <div className='card mt-3 gap-2'>
                        <img src={imagepayment} alt=''></img>
                        <div className='flex flex-col gap-[2px] ml-2 mt-1'>
                            <div className='flex space-x-8 text-[10px] font-bold'>
                                <p>UI/UX Design</p>
                                <div className='flex items-center'>
                                    <img src={star} alt=''></img>
                                    <p>4.7</p> 
                                </div>                
                            </div>
                            <p className='text-[10px] font-bold'>Belajar Web Designer dengan Figma</p>
                            <p className='text-[7px]'>by Angela Doe</p>
                            <div className='flex text-[7px] gap-5 font-bold'>
                                <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={badge} alt=''></img>
                                    <p className='text-[#6148FF]'>Intermediate Level</p>
                                </div>
                                 <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={book} alt=''></img>
                                    <p>10 Modul</p>
                                </div>
                                 <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={clock} alt=''></img>
                                    <p>120 Menit</p>
                                </div>
                            </div>
                            <div className='flex px-3 py-3 bg-merah-0 text-white mt-1'>
                                <img className='w-2 h-2' src={diamond} alt=''></img>
                                <p className='text-[8px]'>Waiting for Payment</p>
                            </div>
                        </div>
                    </div>
                    <div className='card mt-3 gap-2'>
                        <img src={imagepayment} alt=''></img>
                        <div className='flex flex-col gap-[2px] ml-2 mt-1'>
                            <div className='flex space-x-8 text-[10px] font-bold'>
                                <p>UI/UX Design</p>
                                <div className='flex items-center'>
                                    <img src={star} alt=''></img>
                                    <p>4.8</p> 
                                </div>                
                            </div>
                            <p className='text-[10px] font-bold'>Membuat Wireframe Hingga ke Visual Design</p>
                            <p className='text-[7px]'>by Angela Doe</p>
                            <div className='flex text-[7px] gap-5 font-bold'>
                                <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={badge} alt=''></img>
                                    <p className='text-[#6148FF]'>Intermediate Level</p>
                                </div>
                                 <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={book} alt=''></img>
                                    <p>5 Modul</p>
                                </div>
                                 <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={clock} alt=''></img>
                                    <p>60 Menit</p>
                                </div>
                            </div>
                            <div className='flex justify-center space-x-1 rounded-lg items-center w-[3rem] h-3 bg-hijau-0 text-white mt-1'>
                                <img className='w-2 h-2' src={diamond} alt=''></img>
                                <p className='text-[8px]'>Paid</p>
                            </div>
                        </div>
                    </div>
                    <div className='card mt-3 gap-2'>
                        <img src={imagepayment} alt=''></img>
                        <div className='flex flex-col gap-[2px] ml-2 mt-1'>
                            <div className='flex space-x-8 text-[10px] font-bold'>
                                <p>UI/UX Design</p>
                                <div className='flex items-center'>
                                    <img src={star} alt=''></img>
                                    <p>4.4</p> 
                                </div>                
                            </div>
                            <p className='text-[10px] font-bold'>Pengenalan tentang Design System</p>
                            <p className='text-[7px]'>by Angela Doe</p>
                            <div className='flex text-[7px] gap-5 font-bold'>
                                <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={badge} alt=''></img>
                                    <p className='text-[#6148FF]'>Advanced Level</p>
                                </div>
                                 <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={book} alt=''></img>
                                    <p>10 Modul</p>
                                </div>
                                 <div className='flex space-x-1'>
                                    <img className='w-2.5 h-2.5' src={clock} alt=''></img>
                                    <p>120 Menit</p>
                                </div>
                            </div>
                            <div className='flex justify-center space-x-1 rounded-lg items-center w-[3rem] h-3 bg-hijau-0 text-white mt-1'>
                                <img className='w-2 h-2' src={diamond} alt=''></img>
                                <p className='text-[8px]'>Paid</p>
                            </div>
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
