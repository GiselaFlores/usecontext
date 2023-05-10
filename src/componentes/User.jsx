import React, {useContext} from "react";
import {UserContext} from "../App.js";

const User = () => {

    const user = useContext(UserContext)

    return (
        <div>
            <p> Nombre: {user.nombre} </p>
            <p> Edad: {user.edad} </p>
            <p> Sector: {user.sector} </p>
            <p> Adminitrador: {user.isAdmin}</p>
            
        </div>
    );
};

export default User;



