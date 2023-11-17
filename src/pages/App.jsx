import React from "react";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex text-red-500 font-bold bg-blue-400">App</div>
      <button onClick={() => navigate(`/home`)}>Home</button>
    </>
  );
};
