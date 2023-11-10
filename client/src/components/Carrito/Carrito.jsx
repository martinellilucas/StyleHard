import { useContext } from "react";
import style from "./Carrito.module.css";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx";
import { MdDeleteOutline } from "react-icons/md";
const Carrito = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);
  const handleFinalizar = () => {
    alert("Compra realizada con exito");
  };
  if (cart.length === 0) {
    return (
      <div className={style.body}>
        <h1 className={style.title}>StyleHard</h1>
        <hr className={style.separador} />
        <h4 className={style.title}> Tu carrito esta vacio !</h4>
        <hr />
        <div className={style.container}>
          <Link to="/productos">
            <button className={style.button}>Volver</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className={style.title}>StyleHard</h1>
      <hr className={style.separador} />
      <h2 className={style.title2}>Tu compra</h2>
      <hr />
      {cart.map((item) => {
        return (
          <div className={style.itemContainer}>
            <Card
              id={item.id}
              imagen={item.imagen}
              tipo={item.tipo}
              marca={item.marca}
              descripcion={item.descripcion}
              stock={item.cantidad}
              precio={item.precio}
            ></Card>
            <button
              className={style.deleteBtn}
              onClick={() => eliminarItem(item.id)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        );
      })}
      <hr />
      <div className={style.container}>
        <button className={style.button} onClick={handleFinalizar}>
          FINALIZAR COMPRA
        </button>
        <h2 className={style.title2}>TOTAL ${totalCart()}</h2>
      </div>
    </div>
  );
};

export default Carrito;
