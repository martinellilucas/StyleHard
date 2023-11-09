import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
const Login = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  console.log(user?.email_verified);
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
          <h4 className={style.user}>{user?.email}</h4>
        </div>
      )}
    </>
  );
};

export default Login;
