import React from "react";

import "./App.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
export default function Home() {
  const navigate = useNavigate();

  const goToTable = () => {
    navigate("/products");
  };
  return (
    <div className="App">
      <h1>Web store application</h1>
      <Button variant="contained" onClick={goToTable}>
        Show products
      </Button>
    </div>
  );
}
