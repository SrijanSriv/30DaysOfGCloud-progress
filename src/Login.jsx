import React from "react";
import { useState } from 'react';

const Login = () => {
    let inipass = "";
    let iniinfo = "Enter The Password";

    const [info, changeInfo] = useState(iniinfo);
    const [pass, changePass] = useState(inipass);

    const changePassFunc = (event) => {
        changePass(event.target.value);
    };

    const passAuth = (event) => {
        event.preventDefault()

        if(pass === "iiitranchi"){
            window.location.href = "/progress"
        }
        else{
            changeInfo("Wrong Password! Try Again.")
        }
    };

    return(
        <>
        <div id="login">
            <div id = "info">{info}</div>
            <form onSubmit = {passAuth} id="login--form">
                <input placeholder = "password" type = "password" value = {pass} onChange = {changePassFunc} ></input>
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    );
};

export default Login;