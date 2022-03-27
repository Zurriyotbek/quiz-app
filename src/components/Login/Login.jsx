import React from "react";
import "../Login/Login.scss";
import LoginImg from "../../images/login-img.svg";
const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <img
        className="login__img"
        src={LoginImg}
        alt=""
        width="126"
        height="135"
      />

      <input
        className="login__input-number"
        type="number"
        placeholder="Enter your mobile number"
      />

      <button>Login</button>
    </div>
  );
};

export default Login;
