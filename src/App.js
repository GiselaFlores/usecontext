import React from "react";
import './App.css';
import User from "./componentes/User"

export const UserContext = React.createContext();

function App() {

  const user = {
    nombre: "Gisela",
    edad: 41,
    sector: "codo a codo",
    isAdmin: "si"
  }

  return (
    <UserContext.Provider value={user}>

    <User />
    
    </UserContext.Provider>

  );
}

export default App;
