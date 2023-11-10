import { useContext, useEffect, useState } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addDetail, cleanDetail } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../Carrito/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

const Detail = () => {
  const { productDetail } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const [cantidad, setCantidad] = useState(0);
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const handleClick = () => {
    if (isAuthenticated) {
      if (cantidad === 0) return;
      if (!isInCart(id)) {
        const addItem = { ...productDetail, cantidad: cantidad };
        agregarAlCarrito(addItem);
      }
    } else loginWithPopup();
  };
  useEffect(() => {
    dispatch(addDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id, dispatch]);

  return (
    <div className={style.body}>
      <h1 className={style.title}>StyleHard</h1>
      <hr className={style.separador} />
      {productDetail.tipo ? (
        <div className={style.detail}>
          <img alt={productDetail.descripcion} src={productDetail.imagen} />
          <div className={style.desc}>
            <h1>{productDetail.tipo}</h1>
            <hr />
            <h2>{productDetail.marca}</h2>
            <hr />
            <h3>{productDetail.descripcion}</h3>
            <hr />
            <p>Unidades: {productDetail.stock}</p>
            <hr />
            <p>Precio: ${productDetail.precio}</p>
            <hr />
            {isInCart(id) ? (
              <Link to="/cart">
                <button className={style.button}>Terminar compra</button>
              </Link>
            ) : (
              <div className={style.container}>
                <ItemCount
                  max={productDetail.stock}
                  counter={cantidad}
                  setCounter={setCantidad}
                />
                <button className={style.button} onClick={handleClick}>
                  SUMAR AL CARRITO
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default Detail;
