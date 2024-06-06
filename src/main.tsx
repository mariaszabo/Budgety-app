import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.tsx";


import "./normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* ii da lui App acces la api-ul de navigare */} 
      <AuthProvider> {/* ii da lui App acces la contextul de autentificare */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
