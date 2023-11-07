import style from "./Productos.module.css";
import SearchBar from "../Search/SearchBar";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts, order, filter } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";

const Productos = ({ currentPage, setCurrentPage }) => {
  const productos = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [productsPerPage] = useState(6);

  const totalProducts = productos.length;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleOrder = (event) => {
    const judgment = event.target.value;
    dispatch(order(judgment));
    setCurrentPage(1);
  };
  const handleFilter = (event) => {
    const judgment = event.target.value;
    dispatch(filter(judgment));
    setCurrentPage(1);
  };
  return (
    <div className={style.body}>
      <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className={style.separador}>
        <h1 className={style.filtrar}>Filtrar</h1>
        <select className={style.menu} name="order" onChange={handleOrder}>
          <option className={style.menuOption}>Por precio</option>
          <option className={style.menuOption} value="ascendente">
            ⬆
          </option>
          <option className={style.menuOption} value="descendente">
            ⬇
          </option>
        </select>
        <select className={style.menu} name="filter" onChange={handleFilter}>
          <option className={style.menuOption} value="all">
            Por tipo
          </option>
          <option className={style.menuOption} value="Monitor">
            Monitor
          </option>
          <option className={style.menuOption} value="Procesador">
            Procesador
          </option>
          <option className={style.menuOption} value="Mother">
            Mother
          </option>
          <option className={style.menuOption} value="Gráfica">
            Gráfica
          </option>
          <option className={style.menuOption} value="Memoria">
            Memoria
          </option>
          <option className={style.menuOption} value="Gabinete">
            Gabinete
          </option>
          <option className={style.menuOption} value="Fuente">
            Fuente
          </option>
          <option className={style.menuOption} value="Auriculares">
            Auriculares
          </option>
          <option className={style.menuOption} value="Teclado">
            Teclado
          </option>
          <option className={style.menuOption} value="Mouse">
            Mouse
          </option>
        </select>
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
      <Cards productos={productos.slice(firstIndex, lastIndex)} />
    </div>
  );
};

export default Productos;
