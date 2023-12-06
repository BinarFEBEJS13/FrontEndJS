import React, { useEffect, useRef, useState } from "react";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";
import LogoBg from "../../assets/img/LogoBg.jpg";
import salah from "../../assets/svg/salah.svg";
import check from "../../assets/svg/check.svg";

export const Register = () => {
  //FUNSGI UNTUK NAMA
  const [nama, setNama] = useState("");
  const handleInputNama = (event) => {
    const nilaiInputNama = event.target.value;
    setNama(nilaiInputNama);
  };

  //FUNGSI UNTUK EMAIL
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const handleInputEmail = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  //FUNGSI UNTUK NOMOR TELEPON
  const inputNoTeleponRef = useRef(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const validasiNomorTelepon = () => {
    const inputNoTelepon = inputNoTeleponRef.current;
    const checkIcon = document.getElementById("checkIcon");
    const apakahNomorTeleponValid =
      !isNaN(inputNoTelepon.value) && inputNoTelepon.value.length > 10;

    if (apakahNomorTeleponValid) {
      checkIcon.classList.remove("hidden");
    } else {
      checkIcon.classList.add("hidden");
    }
  };

  useEffect(() => {
    validasiNomorTelepon();
  }, []);

  //FUNSGI UNTUK PASSWORD
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [registrationAttempted, setRegistrationAttempted] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false); // Define isLengthValid
  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const handleInputPass = (event) => {
    const newPassword = event.target.value;
    setInputPassword(newPassword);
    setRegistrationAttempted(false);
    setIsValidPassword(false);

    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    setIsLengthValid(newPassword.length >= 8);
    setIsValidPassword(hasUpperCase && hasNumber && isLengthValid);
  };

  //FUNGSI UNTUK REGISTER
  const handleRegistration = () => {
    setRegistrationAttempted(true);
    console.log("Nama:", nama);
    console.log("Email:", email);
    console.log(
      "Nomor Telepon:",
      selectedCountryCode +
        (inputNoTeleponRef.current ? inputNoTeleponRef.current.value : "")
    );
    console.log("Password:", inputPassword);

    if (isValidPassword) {
      console.log("Registrasi Sukses");
      setRegistrationSuccess(true);
    }
  };

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-2/3 flex flex-col justify-center">
        <h1 className="ml-[10.5rem] mb-[2rem] font-bold text-2xl text-purple-800">
          Daftar
        </h1>

        <div className="flex flex-col items-center space-y-5">
          {/* INPUTAN NAMA */}
          <div className="flex flex-col relative">
            <label className="mb-1">Nama</label>
            <input
              className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={handleInputNama}
            />
          </div>

          {/*INPUTAN EMAIL*/}
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <div className="relative">
              <input
                className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
                placeholder="Contoh:sayahuman@gmail.com"
                value={email}
                onChange={handleInputEmail}
              />
              {isValidEmail && (
                <img
                  src={check}
                  alt="check"
                  className="top-[0.9rem] right-5 absolute"
                />
              )}
            </div>
          </div>

          {/*INPUTAN NO TELEPON*/}
          <div className="flex flex-col">
            <label className="mb-1">Nomor Telepon</label>
            <div className="relative flex w-[35rem]">
              <div className="select-container">
                <select
                  value={selectedCountryCode}
                  onChange={handleCountryCodeChange}
                  className="h-[3rem] rounded-l-xl border border-gray-300 px-3"
                >
                  <option value="+1">Amerika Serikat (+1)</option>
                  <option value="+966">Arab Saudi (+966)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+86">China (+86)</option>
                  <option value="+91">India (+91)</option>
                  <option value="+62">Indonesia (+62)</option>
                  <option value="+81">Jepang (+81)</option>
                  <option value="+82">Korea Selatan (+82)</option>
                </select>
              </div>
              <input
                ref={inputNoTeleponRef}
                className="h-[3rem] flex-1 rounded-r-xl border border-gray-300 pl-3"
                placeholder="Masukan Nomor Telepon"
                onChange={() => {
                  validasiNomorTelepon();
                }}
              />
              <img
                id="checkIcon"
                src={check}
                alt="check2"
                className="top-[0.9rem] right-5 absolute hidden"
              />
            </div>
          </div>

          {/*INPUTAN BUAT PASSWORD*/}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Buat Password</label>
            </div>
            <div className="relative">
              <input
                type={PasswordVisible ? "text" : "password"}
                value={inputPassword}
                onChange={handleInputPass}
                className={`h-[3rem] w-[35rem] rounded-xl border ${
                  isValidPassword || !registrationAttempted
                    ? "border-gray-300"
                    : "border-red-500"
                } pl-3`}
                placeholder="Buat Password"
              />
              {isValidPassword && (
                <img
                  src={check}
                  alt="check"
                  className="top-3 right-5 absolute cursor-pointer"
                />
              )}
              {!isValidPassword && !registrationAttempted && (
                <>
                  <img
                    src={pass}
                    alt="pass"
                    className="top-3 right-5 absolute cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                  <img
                    src={PasswordVisible ? passClose : pass}
                    alt={PasswordVisible ? "passClose" : "pass"}
                    className="top-3 right-5 absolute cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                </>
              )}
              {!isValidPassword &&
                registrationAttempted &&
                inputPassword.length > 0 && (
                  <img
                    src={salah}
                    alt="wrong"
                    className="top-3 right-5 absolute cursor-pointer"
                  />
                )}
            </div>
            {!isValidPassword && isLengthValid && (
              <p className="text-red-500 text-sm mt-1">
                Password harus mengandung huruf kapital, angka, dan tanda baca.
              </p>
            )}
          </div>

          {/*BUTTON REGISTER */}
          <button
            className="h-[3rem] w-[35rem] rounded-xl bg-gradientkanan text-white"
            onClick={handleRegistration}
          >
            Daftar
          </button>

          {/* PERTANYAAN */}
          <span>
            Sudah punya akun?{" "}
            <a
              className="text-purple-800 font-semibold hover:underline"
              href="/"
            >
              Masuk di sini
            </a>
          </span>
          {!isValidPassword && registrationAttempted && (
            <div className="h-[3rem] w-[15rem] bg-merah-0 text-white rounded-xl flex justify-center items-center">
              Password min 8 karakter!
            </div>
          )}
          {registrationSuccess && (
            <div className="h-[3rem] w-[15rem] bg-green-600 text-white rounded-xl flex justify-center items-center">
              Registrasi sukses!
            </div>
          )}
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
