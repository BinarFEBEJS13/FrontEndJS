import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../img/logo-navbar.png";
import searchnav from "../svg/search.svg";
import login from "../svg/log-in.svg";
// import svg navbar
import list from "../svg/list.svg";
import bell from "../svg/bell-putih.svg";
import user from "../svg/user.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataToggle, setDataToggle] = useState(false);
  const [activeItem, setActiveItem] = useState("notifikasi");

  const handleToggle = () => {
    setDataToggle(!dataToggle);
  };

  const handleActiveItem = (item) => {
    setActiveItem(item);

    if (item === "notifikasi") {
      navigate("/");
    } else if (item === "akun") {
      navigate("/akun");
    }
  };

  useEffect(() => {
    // Mendapatkan path dari lokasi saat ini
    const path = location.pathname;

    // Mengatur activeItem sesuai dengan path
    if (path === "/") {
      setActiveItem("notifikasi");
    } else if (path === "/akun") {
      setActiveItem("akun");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="w-screen h-20 bg-gradientkanan sm:px-8">
        <div className="container mx-auto h-full">
          <div className="flex h-full">
            <div className="flex items-center w-1/3">
              <img src={logo} alt="" className="cursor-pointer" onClick={() => navigate("/beranda")} />
            </div>
            <div className="flex items-center justify-center w-1/3">
              <div className="relative w-full">
                <input placeholder="cari kursus terbaik.." className="pl-4 pr-14 w-full py-3 rounded-2xl"></input>
                <img src={searchnav} alt="" className="bg-biru-0 absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md cursor-pointer p-1" />
              </div>
            </div>
            <div className="flex items-center w-1/3 justify-end">
              {/* Apbila user belum login */}
              {dataToggle ? (
                {/* <button className="flex gap-2 items-center text-white">
                  <img src={login} alt="" />
                  Masuk
                </button> */}
              ) : (
                // Kalo user sudah login
                <div className="flex gap-4 items-center">
                  {/* <div className="cursor-pointer" onClick={() => handleActiveItem("beranda")}>
                    {activeItem === "beranda" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src='' alt="" />
                        Beranda
                      </div>
                    ) : (
                      <img src='' alt="" className="" />
                    )}
                  </div>
                  <div className="cursor-pointer" onClick={() => handleActiveItem("kelas")}>
                    {activeItem === "kelas" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src={list} alt="" />
                        Kelas
                      </div>
                    ) : (
                      <img src={list} alt="" className="" />
                    )}
                  </div> */}
                  <div className="cursor-pointer" onClick={() => handleActiveItem("notifikasi")}>
                    {activeItem === "notifikasi" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src={bell} alt="" />
                        Notifikasi
                      </div>
                    ) : (
                      <img src={bell} alt="" className="" />
                    )}
                  </div>
                  <div className="cursor-pointer" onClick={() => handleActiveItem("akun")}>
                    {activeItem === "akun" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src={user} alt="" />
                        Akun
                      </div>
                    ) : (
                      <img src={user} alt="" className="" />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
