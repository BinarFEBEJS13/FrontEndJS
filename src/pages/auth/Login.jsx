import React, { useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";

export const Login = () => {
  //FUNGSI UNTUK EMAIL
  const [email, setEmail] = useState("");
  const [isEmailTerdaftar, setIsEmailTerdaftar] = useState(true);
  const periksaApakahEmailTerdaftar = (emailYangDimasukkan) => {
    const emailTerdaftar = [
      "user1@gmail.com",
      "user2@gmail.com",
      "user3@gmail.com",
    ];
    return emailTerdaftar.includes(emailYangDimasukkan);
  };
  

  //FUNGSI UNTUK PASSWORD
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const handleInputPass = (event) => {
    setInputPassword(event.target.value);
  };

  const getPasswordByEmail = (inputEmail) => {
    const userCredentials = {
      "user1@gmail.com": "password1",
      "user2@gmail.com": "password2",
      "user3@gmail.com": "password3",
    };

    return userCredentials[inputEmail];
  };

  //FUNGSI BUTTON MASUK
  const handleLogin = () => {
    const isTerdaftar = periksaApakahEmailTerdaftar(email);

    setIsEmailTerdaftar(isTerdaftar);

    if (!isTerdaftar) {
      console.log("Email tidak terdaftar");
      return;
    }

    const registeredPassword = getPasswordByEmail(email);

    if (inputPassword !== registeredPassword) {
      setPasswordError("Password salah!");
      return;
    }
    setPasswordError("");
    console.log("Login successful!");
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-2/3 flex flex-col justify-center">
        <h1 className="ml-[10.5rem] mb-[2rem] font-bold text-2xl text-purple-800">
          Masuk
        </h1>

        {/* INPUTAN EMAIL */}
        <div className="flex flex-col items-center space-y-5">
          <div className="flex flex-col">
            <label className="mb-1">Email/No Telepon</label>
            <input
              className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
              placeholder="Contoh: user1@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* INPUTAN PASSWORD */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Password</label>
              <a href="/" className="text-blue-500 hover:underline">
                Lupa Kata sandi
              </a>
            </div>
            <div className="relative">
              <input
                type={PasswordVisible ? "text" : "password"}
                value={inputPassword}
                onChange={handleInputPass}
                className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3"
                placeholder="Masukkan Password"
              />
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
            </div>
          </div>

          {/* BUTTON LOGIN */}
          <button
            className="h-[3rem] w-[35rem] rounded-xl bg-gradientkanan text-white"
            onClick={handleLogin}
          >
            Masuk
          </button>

          <span>
            Belum punya akun?{" "}
            <a
              className="text-purple-800 font-semibold hover:underline"
              href="/register"
            >
              Daftar di sini
            </a>
          </span>
          {!isEmailTerdaftar && (
            <div className="h-[3rem] w-[15rem] bg-red-600 text-white rounded-xl flex justify-center items-center">
              Email tidak terdaftar
            </div>
          )}
          {passwordError && (
            <div className="h-[3rem] w-[15rem] bg-red-600 text-white rounded-xl flex justify-center items-center">
              {passwordError}
            </div>
          )}
        </div>
      </div>

      {/* SEBELAH KANAN */}
      {/* <div className="flex col-span-2 bg-gradientbawah justify-center items-center text-white">
        Logo
      </div> */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
