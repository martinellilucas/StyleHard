import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
import { FaUserCheck } from "react-icons/fa";
const Login = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
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
          <h4 className={style.user}>
            <FaUserCheck />
            {user?.email}
          </h4>
        </div>
      )}
    </>
  );
};

export default Login;
