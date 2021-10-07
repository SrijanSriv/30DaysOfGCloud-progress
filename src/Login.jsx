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
            <form onSubmit = {passAuth}>
                <input placeholder = "password" type = "text" value = {pass} onChange = {changePassFunc}></input>
            </form>
        </div>
        </>
    );
};

export default Login;