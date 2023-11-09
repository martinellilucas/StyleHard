import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {!isAuthenticated && (
        <button
          className={style.button}
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Login;
