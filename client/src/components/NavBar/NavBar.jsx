import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link className={style.span} to="/">
        <span>Inicio</span>
      </Link>

      <Link className={style.span} to="/productos">
        <span>Productos</span>
      </Link>

      <Link className={style.span} to="/about">
        <span>Contacto</span>
      </Link>
    </div>
  );
};

export default NavBar;
