import React, { useState } from "react";
import { Navbar } from "../assets/components/Navbar";
// png main section
import course from "../assets/img/course.png";
// png kategori belajar
import uiux from "../assets/img/uiux.png";
// import productmanagement from "../assets/img/productmanagement.png";
import uiuxdesign from "../assets/img/uiux.jpeg";
import pm from "../assets/img/pm.jpeg";
import webdev from "../assets/img/webdev.jpeg";
import android from "../assets/img/android.jpeg";
import ios from "../assets/img/ios.jpeg";
import datascience from "../assets/img/datascience.jpeg";
// svg card
import star from "../assets/svg/star.svg";
import level from "../assets/svg/kategori-level.svg";
import modul from "../assets/svg/book.svg";
import clock from "../assets/svg/clock.svg";
import diamond from "../assets/svg/diamond.svg";

export const Beranda = () => {
  const [activePopular, setActivePopular] = useState("all");

  const handleActivePopular = (item) => {
    setActivePopular(item);
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        {/* Section Main Beranda */}
        <div className="w-screen bg-gradientkanan sm:px-8">
          <div className="container mx-auto">
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-8 justify-center items-start">
                <div className="flex flex-col gap-4">
                  <h2 className="text-white text-4xl font-bold">
                    Your{" "}
                    <span
                      className="text-yellow-300
                    "
                    >
                      Space
                    </span>{" "}
                    for Skills Up
                  </h2>
                  <p className="w-full xl:w-3/4 text-white opacity-90">Dengan kursus yang berkualitas dan fasilitas pembelajaran yang mendukung, membuka peluang untuk mengasah kemampuan dan meraih kesuksesan di dunia teknologi.</p>
                </div>
                <div>
                  <button className="bg-gradientbutton text-white px-8 py-2 rounded-md shadow-sm-button">Ikuti Kelas Sekarang</button>
                </div>
              </div>
              <div className="w-1/2 flex items-end">
                <img src={course} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
        {/* Kategori Belajar */}
        <div className="w-screen sm:px-8 py-8 pt-16">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Kategori Belajar</h1>
                <h6 className="text-ungu-0 text-sm">Lihat Semua...</h6>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer">
                  <img src={uiuxdesign} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-sm font-semibold text-center">UI/UX Design</h2>
                </div>
                <div className="flex flex-col w-1/6 items-center border rounded-md gap-2 pb-4">
                  <img src={pm} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-sm font-semibold text-center">Product Management</h2>
                </div>
                <div className="flex flex-col w-1/6 items-center border rounded-md gap-2 pb-4">
                  <img src={webdev} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-sm font-semibold text-center">Web Development</h2>
                </div>
                <div className="flex flex-col w-1/6 items-center border rounded-md gap-2 pb-4">
                  <img src={android} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-sm font-semibold text-center">Android Development</h2>
                </div>
                <div className="flex flex-col w-1/6 items-center border rounded-md gap-2 pb-4">
                  <img src={ios} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-sm font-semibold text-center">IOS Development</h2>
                </div>
                <div className="flex flex-col w-1/6 items-center border rounded-md gap-2 pb-4">
                  <img src={datascience} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-sm font-semibold text-center">Data Science</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Kursus Populer */}
        <div className="w-screen sm:px-8 py-8 ">
          <div className="container mx-auto">
            <div className="flex flex-col gap-6">
              {/* Judul Kursus Populer */}
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Kursus Populer</h1>
                <h6 className="text-ungu-0 text-sm">Lihat Semua...</h6>
              </div>
              {/* Button Filter Kursus */}
              <div>
                <div className="flex justify-evenly gap-2 xl:gap-0">
                  <button
                    className={`${activePopular === "all" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("all")}
                  >
                    All
                  </button>
                  <button
                    className={`${activePopular === "datascience" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("datascience")}
                  >
                    Data Science
                  </button>
                  <button
                    className={`${activePopular === "uiuxdesign" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("uiuxdesign")}
                  >
                    UI/UX Design
                  </button>
                  <button
                    className={`${activePopular === "android" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("android")}
                  >
                    Android Development
                  </button>
                  <button
                    className={`${activePopular === "web" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("web")}
                  >
                    Web Development
                  </button>
                  <button
                    className={`${activePopular === "ios" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md ppx-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("ios")}
                  >
                    IOS Development
                  </button>
                  <button
                    className={`${activePopular === "bi" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("bi")}
                  >
                    Business Intelligence
                  </button>
                </div>
              </div>
              {/* Card Kursus */}
              <div className="flex w-full">
                <div className="flex gap-6 w-full">
                  <div className="w-1/3 xl:w-1/4  shadow-sm-button rounded-2xl">
                    <div>
                      <img src={uiux} alt="" className="w-full rounded-2xl" />
                    </div>
                    <div className="px-4 py-4 flex flex-col gap-2 rounded-2xl">
                      <div className="flex justify-between">
                        <h6 className="text-ungu-0">Android Development</h6>
                        <span className="flex items-center">
                          <img src={star} alt="" className="w-6" />
                          4.7
                        </span>
                      </div>
                      <div>
                        <h2 className="font-bold cursor-pointer">Belajar Web Designer dengan Figma</h2>
                        <span className="opacity-50 text-sm">by Angela Doe</span>
                      </div>
                      <div className="flex flex-wrap w-full gap-2 text-sm">
                        <span className="flex gap-2 items-center">
                          <img src={level} alt="" className="w-5" />
                          Intermediate Level
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={modul} alt="" className="w-5" />
                          10 Modul
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={clock} alt="" className="w-5" />
                          120 Menit
                        </span>
                      </div>
                      <div className="text-sm">
                        <div className="flex text-white items-center">
                          <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                            <img src={diamond} alt="" className="w-4" />
                            <span>Beli</span>
                            <span>Rp 249.000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 xl:w-1/4 shadow-sm-button rounded-2xl">
                    <div>
                      <img src={uiux} alt="" className="w-full rounded-2xl" />
                    </div>
                    <div className="px-4 py-4 flex flex-col gap-2 rounded-2xl">
                      <div className="flex justify-between">
                        <h6 className="text-ungu-0">UI/UX Design</h6>
                        <span className="flex items-center">
                          <img src={star} alt="" className="w-6" />
                          4.7
                        </span>
                      </div>
                      <div>
                        <h2 className="font-bold cursor-pointer">Belajar Web Designer dengan Figma</h2>
                        <span className="opacity-50 text-sm">by Angela Doe</span>
                      </div>
                      <div className="flex flex-wrap w-full gap-2 text-sm">
                        <span className="flex gap-2 items-center">
                          <img src={level} alt="" className="w-5" />
                          Intermediate Level
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={modul} alt="" className="w-5" />
                          10 Modul
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={clock} alt="" className="w-5" />
                          120 Menit
                        </span>
                      </div>
                      <div className="text-sm">
                        <div className="flex text-white items-center">
                          <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                            <img src={diamond} alt="" className="w-4" />
                            <span>Beli</span>
                            <span>Rp 249.000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 xl:w-1/4 shadow-sm-button rounded-2xl">
                    <div>
                      <img src={uiux} alt="" className="w-full rounded-2xl" />
                    </div>
                    <div className="px-4 py-4 flex flex-col gap-2 rounded-2xl">
                      <div className="flex justify-between">
                        <h6 className="text-ungu-0">UI/UX Design</h6>
                        <span className="flex items-center">
                          <img src={star} alt="" className="w-6" />
                          4.7
                        </span>
                      </div>
                      <div>
                        <h2 className="font-bold cursor-pointer">Belajar Web Designer dengan Figma</h2>
                        <span className="opacity-50 text-sm">by Angela Doe</span>
                      </div>
                      <div className="flex flex-wrap w-full gap-2 text-sm">
                        <span className="flex gap-2 items-center">
                          <img src={level} alt="" className="w-5" />
                          Intermediate Level
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={modul} alt="" className="w-5" />
                          10 Modul
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={clock} alt="" className="w-5" />
                          120 Menit
                        </span>
                      </div>
                      <div className="text-sm">
                        <div className="flex text-white items-center">
                          <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                            <img src={diamond} alt="" className="w-4" />
                            <span>Beli</span>
                            <span>Rp 249.000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-1/3 xl:w-1/4 shadow-sm-button rounded-2xl">
                    <div>
                      <img src={uiux} alt="" className="w-full rounded-2xl" />
                    </div>
                    <div className="px-4 py-4 flex flex-col gap-2 rounded-2xl">
                      <div className="flex justify-between">
                        <h6 className="text-ungu-0">UI/UX Design</h6>
                        <span className="flex items-center">
                          <img src={star} alt="" className="w-6" />
                          4.7
                        </span>
                      </div>
                      <div>
                        <h2 className="font-bold cursor-pointer">Belajar Web Designer dengan Figma</h2>
                        <span className="opacity-50 text-sm">by Angela Doe</span>
                      </div>
                      <div className="flex flex-wrap w-full gap-2 text-sm">
                        <span className="flex gap-2 items-center">
                          <img src={level} alt="" className="w-5" />
                          Intermediate Level
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={modul} alt="" className="w-5" />
                          10 Modul
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={clock} alt="" className="w-5" />
                          120 Menit
                        </span>
                      </div>
                      <div className="text-sm">
                        <div className="flex text-white items-center">
                          <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                            <img src={diamond} alt="" className="w-4" />
                            <span>Beli</span>
                            <span>Rp 249.000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
