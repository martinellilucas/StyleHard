import style from "./Productos.module.css";
import SearchBar from "../Search/SearchBar";
import Cards from "../Cards/Cards";

const Productos = () => {
  return (
    <div>
      <SearchBar />
      <Cards />
    </div>
  );
};

export default Productos;
