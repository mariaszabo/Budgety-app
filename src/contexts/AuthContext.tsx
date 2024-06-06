import { jwtDecode } from "jwt-decode";
import { ReactNode, createContext, useContext, useState } from "react";
import { login as loginRequest } from "@/requests";

type DecodedToken = {
  username: string;
  iat: number;
  fullName: string; 
  _id: string;
};

// initializam token-ul din localStorage sau cu null
const defaultToken = localStorage.getItem("authToken") || null;

// decodam token-ul din localStorage sau il setam cu null
const defaultDecoded = defaultToken
  ? (jwtDecode(defaultToken) as DecodedToken)
  : null;

//definim tipul de date al contextului
type AuthContextType = {
  token: string | null;
  user: DecodedToken | null;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: defaultToken,
  user: defaultDecoded,
  login: () => {},
  logout: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

// export AuthContext; //exportam contextul

export const AuthProvider = ({ children }: AuthProviderProps) => {
  //definim provider-ul, care va contine children si sefoloseste de contextul definit mai sus
  const [token, setToken] = useState<string | null>(defaultToken);
  const [user, setUser] = useState<DecodedToken | null>(defaultDecoded);

  const login = async (username: string, password: string) => {
    const response = await loginRequest({ username, password });
    if (!response) {
      return;
    }

    const token = response.token; 
    
    setToken(token);
    localStorage.setItem("authToken", token);
    const decoded = jwtDecode(token) as DecodedToken;
    setUser(decoded);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//definim un custom hook care va returna contextul

export const useAuth = () => {
  return useContext(AuthContext);
};
