import Dashboard from "./pages/Dashboard.tsx";
import Budget from "./pages/Budget.tsx";
import Transactions from "./pages/Transactions.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./contexts/AuthContext.tsx";

const App = () => {
  // const token = null; --> Cand se intampla asta, avem voie doar sa ne logam (sau sa ne inregistram)
  // const token = "1234";  --> Cand se intampla asta, avem voie sa ne logam, sa ne inregistram si sa accesam paginile "Dashboard", "Budget" si "Transactions

  // const [token, setToken] = useState<string | null>(defaultToken); // initializam token-ul dinamic
  // const [user, setUser] = useState(defaultDecoded); // initializam user-ul dinamic cu defaultDecoded (token-ul decodat din localStorage) sau cu null [daca nu exista token in localStorage]

  // const updateToken = (token: string) => {

  //   setToken(token); // setam token-ul in state
  //   localStorage.setItem("authToken", token); // setam token-ul in localStorage
  //   const decoded = jwtDecode(token) as DecodedToken; // decodam token-ul
  //   setUser(decoded); // decodam token-ul si il setam in state-ul user
  // };

  // if (token) {
  //   const decoded = jwtDecode(token); // decodam token-ul
  //   console.log(decoded);
  // }

  const { user } = useAuth(); // extragem token-ul si user-ul din contextul de autentificare

  return (
    <Routes>
      {user && (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
      {!user && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />{" "}
          {/*la orice alt path(pe care nu l-am creat), navigheaza catre path-ul de baza*/}
        </>
      )}
    </Routes>
  );
};

export default App;
