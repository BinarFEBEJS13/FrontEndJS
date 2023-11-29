import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="bg-blue-500">Home</div>
      <button onClick={() => navigate('/')}>Balik</button>
    </>
  );
};
