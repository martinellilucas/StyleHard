import { useEffect } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addDetail, cleanDetail } from "../../redux/actions";
import logo from "../../assets/images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Detail = () => {
  const { productDetail } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleClick = () => {
    alert("Producto agregado al carrito");
  };
  useEffect(() => {
    dispatch(addDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id, dispatch]);

  return (
    <div className={style.body}>
      <h1 className={style.title}>
        StyleHard
        <img alt="logo" src={logo} />
      </h1>
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
            <button className={style.button} onClick={handleClick}>
              SUMAR AL CARRITO
            </button>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default Detail;
