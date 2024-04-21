import Dashboard from "./pages/Dashboard.tsx";
import Budget from "./pages/Budget.tsx";
import Transactions from "./pages/Transactions.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

import {Routes, Route, Navigate} from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} /> {/*la orice alt path(pe care nu l-am creat), navigheaza catre path-ul de baza*/}
    </Routes>
  )

};  

export default App;