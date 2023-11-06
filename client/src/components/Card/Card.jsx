import style from "./Card.module.css";

const Card = ({ id, imagen, tipo, marca, descripcion, stock, precio }) => {
  return (
    <div className={style.card}>
      <img src={imagen}></img>
      <h1>Marca: {marca}</h1>
      <h2>Producto: {tipo}</h2>
      <p>Descripción: {descripcion}</p>
      <p>Unidades: {stock}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default Card;
