import React from 'react'
import picture from "../img/picture.png";

export const Profile = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center ml-0 sm:ml-4 mt-[4rem] sm:mt-4 w-[23rem] sm:w-[18rem] px-5'>
        <div className='relative'>
            <div className='mx-auto w-[70px] h-[70px] bg-white outline outline-[#6148FF] rounded-full z-0'></div>
            <div className='flex justify-center absolute left-[130px] bottom-0 z-10'>
              <div className='flex items-center justify-center w-7 h-7 bg-white rounded-lg z-20'>
                <img className='w-4 h-4' src={picture} alt=''></img>
              </div>
            </div>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <div className=''>
              <span className='text-[12px]'>Nama</span>
              <input type='text' className='w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan nama Anda'></input>
          </div>
          <div>
              <span className='text-[12px]'>Email</span>
              <input type='text' className='w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan email Anda'></input>
          </div>
            <div>
              <span className='text-[12px]'>Nomor Telepon</span>
              <input type='text' className='w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan nomor telepon'></input>
          </div>
            <div>
              <span className='text-[12px]'>Negara</span>
              <input type='text' className='w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan kota tempat tinggal'></input>
          </div>
            <div>
              <span className='text-[12px]'>Kota</span>
              <input type='text' className='w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]' placeholder='Masukkan kota tempat tinggal'></input>
          </div>
          <div className='my-4 sm:mt-2'>
              <button className='w-full p-3 sm:p-2 bg-[#6148FF] rounded-3xl sm:rounded-2xl text-white font-semibold text-sm tracking-[1px]'>Simpan profil saya</button>
          </div>
        </div>
      </div>
    </div>
  )
}
