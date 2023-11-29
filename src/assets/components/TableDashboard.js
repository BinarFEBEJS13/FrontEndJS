import React,{useState} from 'react'
import Filter from "../../assets/svg/filter.svg";
import SearchAdmin from "../../assets/svg/search-admin.svg";
import { PopUpForm } from './PopUpForm';

export const TableDashboard = () => {

    
  return (
    <div>
        <div className="mx-[4rem] flex justify-between">
          <h1 className="font-bold text-xl">Status Pembayaran </h1>
          <div className="flex gap-5">
            <h4 onc className="flex gap-2 border-2 px-3 py-1 font-bold text-base rounded-2xl border-[#6148FF] text-[#6148FF]">
              <img src={Filter} alt="" />
              Filter
            </h4>
            <img src={SearchAdmin} alt="" />
          </div>
        </div>
        <div className="mx-[4rem]">
          <table className="w-full mt-5 ">
            <thead className="bg-[#EBF3FC]  font-normal text-md text-left">
              <tr>
                <th>ID</th>
                <th>Kategori</th>
                <th>Kelas Premium</th>
                <th>Status</th>
                <th>Metode Pembayaran</th>
                <th>Tanggal Bayar</th>
              </tr>
            </thead>
            <tbody className="font-bold text-sm">
              <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
                <td>Row 1, Cell 3</td>
                <td>Row 1, Cell 3</td>
                <td>Row 1, Cell 3</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}
