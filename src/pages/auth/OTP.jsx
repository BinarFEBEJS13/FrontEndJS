import React from 'react'
import LogoBg from '../../assets/img/LogoBg.jpg';

export const OTP = () => {
  return (
    <div className="flex flex-row w-full h-screen">
        
    {/* SEBELAH KIRI */}
    <div className="w-2/3 flex flex-col justify-center">
        <a href="/register">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-[5rem] mb-[1rem]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg> </a>

        <h1 className='ml-[7rem] mb-[2rem] font-bold text-2xl text-purple-800'>Masukan OTP</h1>
    
        <div className='flex flex-col items-center space-y-5'>
            <p>Kode 6 digit dikirimkan ke email anda</p>

        <div className='flex space-x-5'>
            <input className='h-[3rem] w-[3rem] border border-gray-400 rounded-xl'></input>
            <input className='h-[3rem] w-[3rem] border border-gray-400 rounded-xl'></input>
            <input className='h-[3rem] w-[3rem] border border-gray-400 rounded-xl'></input>
            <input className='h-[3rem] w-[3rem] border border-gray-400 rounded-xl'></input>
            <input className='h-[3rem] w-[3rem] border border-gray-400 rounded-xl'></input>
            <input className='h-[3rem] w-[3rem] border border-gray-400 rounded-xl'></input>
        </div>

            <button className='h-[3rem] w-[35rem] rounded-xl bg-gradientkanan text-white'>Simpan</button>    
        </div>
    
    </div>
    
    
    {/* SEBELAH KANAN */}
        {/* <div className='flex col-span-3 bg-gradientbawah justify-center items-center text-white'>
            Logo
        </div> */}
        <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  )
}
