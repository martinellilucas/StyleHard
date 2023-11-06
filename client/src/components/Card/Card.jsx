import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, imagen, tipo, marca, descripcion, stock, precio }) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${id}`}>
        <img className={style.img} src={imagen}></img>
      </Link>
      <h1 className={style.title}>Marca: {marca}</h1>
      <h2 className={style.title}>Producto: {tipo}</h2>
      <p className={style.desc}>{descripcion}</p>
      <p className={style.desc}>Unidades: {stock}</p>
      <p className={style.desc}>Precio: ${precio}</p>
    </div>
  );
};

export default Card;
