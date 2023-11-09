import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
import { FaUserCheck } from "react-icons/fa";
const Login = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <>
      {!isAuthenticated ? (
        <button
          className={style.button}
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login
        </button>
      ) : (
        <div>
          <div className={style.container}>
            <FaUserCheck color="white" />
            <h4 className={style.user}>{user?.email}</h4>
          </div>
          <button className={style.button} onClick={() => logout()}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
