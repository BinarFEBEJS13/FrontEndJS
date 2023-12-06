import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import 'remixicon/fonts/remixicon.css'
import { RouterList } from "./routes/RouterList";
import { PopUpForm } from "./assets/components/PopUpForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterList />
    {/* <PopUpForm/> */}
  </React.StrictMode>
);
