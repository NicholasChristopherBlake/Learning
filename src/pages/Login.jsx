import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
  return (
    <div>
      <h1>Login page</h1>
      <MyInput type="text" placeholder="Enter your username" />
      <MyInput type="password" placeholder="Enter password" />
      <MyButton>Sign up</MyButton>
    </div>
  );
};

export default Login;
