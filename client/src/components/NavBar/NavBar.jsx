import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link className={style.span} to="/">
        <span>Inicio</span>
      </Link>
      <Link className={style.span} to="/productos">
        <span>Productos</span>
      </Link>
      <Link className={style.span} to="/armado">
        <span>Armado de PC</span>
      </Link>
      <Link className={style.span} to="/about">
        <span>Contacto</span>
      </Link>
      <Link className={style.span} to="/login">
        <span>Login</span>
      </Link>
      <Link className={style.span} to="/registro">
        <span>Registro</span>
      </Link>
    </div>
  );
};

export default NavBar;
