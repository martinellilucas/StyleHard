import { useEffect } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addDetail, cleanDetail } from "../../redux/actions";
import SearchBar from "../Search/SearchBar.jsx";

const Detail = () => {
  const { productDetail } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id, dispatch]);
  console.log(productDetail.marca);
  return (
    <div className={style.body}>
      <SearchBar></SearchBar>
      <hr className={style.separador} />
      {productDetail.tipo ? (
        <div className={style.detail}>
          <img src={productDetail.imagen} />
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
            <button className={style.button}>SUMAR AL CARRITO</button>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default Detail;
