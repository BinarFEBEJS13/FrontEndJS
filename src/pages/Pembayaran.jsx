import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
// svg detail kelas
import arrow from "../assets/svg/arrow-left-black.svg";
// svg bayar kelas premium
import arrowwhite from "../assets/svg/arrow-right-white.svg";
import drop from "../assets//svg/Suffix-bottom.svg";
// png kategori belajar
import uiux from "../assets/img/uiux.png";
// png card
import mastercard from "../assets/img/mastercard.png";
import visa from "../assets/img/visa.png";
import american from "../assets/img/american.png";
import paypal from "../assets/img/paypal.png";

export const Pembayaran = () => {
  const [pembayaran, setPembayaran] = useState("");

  const handleBayarKelas = (item) => {
    setPembayaran(pembayaran === item ? "" : item);
  };
  return (
    <>
      <div className="overflow-x-hidden ">
        <Navbar />
        {/* Button arrow kelas lainnnya */}
        <div className="w-screen sm:px-8 pt-8">
          <div className="container mx-auto">
            <div className="">
              <button className="flex gap-2 font-semibold items-center">
                <img src={arrow} alt="" />
                Kembali
              </button>
            </div>
          </div>
        </div>
        {/* Detail kelas */}
        <div className="w-screen sm:px-8 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                {/* Sebelah Kiri */}
                <div className="w-4/6 xl:w-8/12 flex flex-col gap-4">
                  {/* Bank Transfer */}
                  <div className="border rounded-md flex flex-col gap-4">
                    <div onClick={() => handleBayarKelas("bank")} className="flex text-white bg-black justify-between px-4 py-2 rounded-md cursor-pointer">
                      <p>Bank Transfer</p>
                      <img src={drop} alt="" className={`${pembayaran === "bank" ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    {pembayaran === "bank" ? (
                      <div className="flex flex-col gap-8 justify-center items-center p-4 pb-8">
                        {/* Png Credit Card */}
                        <div className="flex gap-2">
                          <img src={mastercard} alt="" className="w-10" />
                          <img src={visa} alt="" className="w-10" />
                          <img src={american} alt="" className="w-10" />
                          <img src={paypal} alt="" className="w-10" />
                        </div>
                        {/* Input Credit Card */}
                        <div className="flex flex-col gap-4">
                          <div className="w-full flex flex-col gap-2">
                            <h2 className="font-bold">Card Number</h2>
                            <div>
                              <input className="w-full" placeholder="4480 0000 0000 0000" />
                              <div className="w-full h-[0.1rem] bg-slate-300"></div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col gap-2">
                            <h2 className="font-bold">Card holder name</h2>
                            <div>
                              <input className="w-full" placeholder="John Doe" />
                              <div className="w-full h-[0.1rem] bg-slate-300"></div>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-full flex flex-col gap-2">
                              <h2 className="font-bold">CVV</h2>
                              <div>
                                <input placeholder="000" />
                                <div className="w-full h-[0.1rem] bg-slate-300"></div>
                              </div>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                              <h2 className="font-bold">Expiry date</h2>
                              <div>
                                <input placeholder="07/24" />
                                <div className="w-full h-[0.1rem] bg-slate-300"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* Credit Card */}
                  <div className="border rounded-md flex flex-col gap-4">
                    {/* Button CC dropdown */}
                    <div onClick={() => handleBayarKelas("credit")} className="flex text-white bg-biru-0 justify-between px-4 py-2 rounded-md cursor-pointer">
                      <p>Credit Card</p>
                      <img src={drop} alt="" className={`${pembayaran === "credit" ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    {pembayaran === "credit" ? (
                      <div className="flex flex-col gap-8 justify-center items-center p-4 pb-8">
                        {/* Png Credit Card */}
                        <div className="flex gap-2">
                          <img src={mastercard} alt="" className="w-10" />
                          <img src={visa} alt="" className="w-10" />
                          <img src={american} alt="" className="w-10" />
                          <img src={paypal} alt="" className="w-10" />
                        </div>
                        {/* Input Credit Card */}
                        <div className="flex flex-col gap-4">
                          <div className="w-full flex flex-col gap-2">
                            <h2 className="font-bold">Card Number</h2>
                            <div>
                              <input className="w-full" placeholder="4480 0000 0000 0000" />
                              <div className="w-full h-[0.1rem] bg-slate-300"></div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col gap-2">
                            <h2 className="font-bold">Card holder name</h2>
                            <div>
                              <input className="w-full" placeholder="John Doe" />
                              <div className="w-full h-[0.1rem] bg-slate-300"></div>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-full flex flex-col gap-2">
                              <h2 className="font-bold">CVV</h2>
                              <div>
                                <input placeholder="000" />
                                <div className="w-full h-[0.1rem] bg-slate-300"></div>
                              </div>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                              <h2 className="font-bold">Expiry date</h2>
                              <div>
                                <input placeholder="07/24" />
                                <div className="w-full h-[0.1rem] bg-slate-300"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* Sebelah Kanan */}
                <div className="w-2/6 xl:w-4/12 flex flex-col gap-4 px-8 py-4 border rounded-md shadow-sm-button">
                  {/* Judul Header */}
                  <div className="flex justify-center items-center">
                    <h2 className="font-bold text-xl text-center">Pembayaran Kelas</h2>
                  </div>
                  {/* Card Beli */}
                  <div className="flex flex-col gap-2">
                    {/* Card yang akan dibeli */}
                    <div>
                      <div className="w-full border rounded-2xl">
                        <div className="">
                          <img src={uiux} alt="" className="w-full rounded-2xl" />
                        </div>
                        <div className="px-4 py-4 flex flex-col gap-2 rounded-2xl">
                          <div className="flex justify-between">
                            <h6 className="text-ungu-0">Android Development</h6>
                          </div>
                          <div>
                            <h2 className="font-bold cursor-pointer">Belajar Web Designer dengan Figma</h2>
                            <span className="opacity-50 text-sm">by Angela Doe</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Daftar Total Harga */}
                    <div className="flex flex-wrap justify-between px-2 text-xs xl:text-sm">
                      <div>
                        <h6 className="font-bold">Harga</h6>
                        <p>Rp 349,000</p>
                      </div>
                      <div>
                        <h6 className="font-bold">PPN 11%</h6>
                        <p>Rp 38,390</p>
                      </div>
                      <div>
                        <h6 className="font-bold">Total Bayar</h6>
                        <p className="text-ungu-0 font-semibold">Rp 387,390</p>
                      </div>
                    </div>
                  </div>
                  {/* Button Beli */}
                  <div className="flex justify-center items-center">
                    <button className="flex gap-2 justify-center items-center bg-merah-0 text-white w-full px-2 py-2 rounded-md text-xs xl:text-sm">
                      Bayar dan Ikuti Kelas Selamanya <img src={arrowwhite} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
