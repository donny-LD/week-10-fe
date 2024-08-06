import React, { useState } from "react";
import { login } from "../utils/fetch";
import styled from "styled-components";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      const data = await response.json();
      setUser(data.user);
      writeCookies("jwt_token", data, token, 7);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <navigate>
        <div class="login-wrapper">
          <h2>login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <label>email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit"> login </button>
          </form>
        </div>
      </navigate>
    </>
  );
};

export default Login;
