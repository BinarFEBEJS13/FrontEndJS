import React, { useState } from "react";
import SearhIcon from "../../assets/svg/search.svg";
import User from "../../assets/svg/Users.svg";
import { Sidebar } from "../../assets/components/Sidebar";
import { TableDashboard } from "../../assets/components/TableDashboard";
import { TableKelas } from "../../assets/components/TableKelas";
import { PopUpForm } from "../../assets/components/PopUpForm";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  
 

  return (
    <div className="flex">
      {/* ========================= Bagian Kiri =========================  */}
      <Sidebar setActiveMenu={setActiveMenu} />
      {/* ========================= Bagian Kanan =========================  */}
      <div className="w-full">
        {/* ========================= Header =========================  */}
        <div className="flex items-center justify-between px-20 h-[100px] bg-[#EBF3FC]">
          <h1 className="font-bold text-2xl text-[#6148FF]">Hi Admin!</h1>
          <form action="" className="relative mt-5">
            <input
              type="text"
              placeholder="Cari"
              className=" pl-5 bg-white w-[18.75rem] rounded-2xl h-[4rem] flex items-center"
            />
            <button>
              <img
                className="bg-[#6148FF] rounded-xl p-2 absolute right-6 top-3 "
                src={SearhIcon}
                alt=""
              />
            </button>
          </form>
        </div>

        {/* ========================= User Data =========================  */}
        <div className="user flex gap-6 m-[4rem] justify-between">
          <div className="bg-[#489CFF] h-[6.75rem] w-1/3 rounded-[15px] ">
            <div className=" flex items-center h-full gap-4 w-3/4 justify-center">
              <img className="rounded-[25px] bg-white p-4" src={User} alt="" />
              <div className="flex flex-col text-white">
                <p className="text-2xl font-normal">450</p>
                <h1 className="font-bold text-xl">Active User</h1>
              </div>
            </div>
          </div>
          <div className="bg-[#73CA5C] h-[6.75rem] w-1/3 rounded-[15px] ">
            <div className=" flex items-center h-full gap-4 w-3/4 justify-center">
              <img className="rounded-[25px] bg-white p-4" src={User} alt="" />
              <div className="flex flex-col text-white">
                <p className="text-2xl font-normal">25</p>
                <h1 className="font-bold text-xl">Active Class</h1>
              </div>
            </div>
          </div>
          <div className="bg-[#6148FF] h-[6.75rem] w-1/3 rounded-[15px] ">
            <div className=" flex items-center h-full gap-4 w-3/4 justify-center">
              <img className="rounded-[25px] bg-white p-4" src={User} alt="" />
              <div className="flex flex-col text-white">
                <p className="text-2xl font-normal">20</p>
                <h1 className="font-bold text-xl">Active User</h1>
              </div>
            </div>
          </div>
        </div>
        {activeMenu === "dashboard" ? <TableDashboard /> : <TableKelas />}
      </div>
    </div>
  );
};

export default Dashboard;
