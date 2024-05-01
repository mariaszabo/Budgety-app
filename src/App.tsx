import Dashboard from "./pages/Dashboard.tsx";
import Budget from "./pages/Budget.tsx";
import Transactions from "./pages/Transactions.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

const defaultToken = localStorage.getItem("authToken") || null; // initializam token-ul din localStorage sau cu null

const App = () => {
  // const token = null; --> Cand se intampla asta, avem voie doar sa ne logam (sau sa ne inregistram)
 // const token = "1234";  --> Cand se intampla asta, avem voie sa ne logam, sa ne inregistram si sa accesam paginile "Dashboard", "Budget" si "Transactions
  
  const [token, setToken] = useState<string | null>(defaultToken); // initializam token-ul dinamic


  const updateToken = (token: string) => {

    setToken(token); // setam token-ul in state
    localStorage.setItem("authToken", token); // setam token-ul in localStorage

  };


  return (
    <Routes>
      {token && (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
      {!token && (
        <>
          <Route path="/login" element={<Login onLogin={updateToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} /> {/*la orice alt path(pe care nu l-am creat), navigheaza catre path-ul de baza*/}
        </>
      )}
    </Routes>
  );
};

export default App;
