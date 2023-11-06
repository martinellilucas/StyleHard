import style from "./Productos.module.css";
import SearchBar from "../Search/SearchBar";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions";
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

  return (
    <div className={style.body}>
      <SearchBar />
      <hr className={style.separador} />
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
