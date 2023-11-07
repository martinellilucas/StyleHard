import style from "./SearchBar.module.css";
import logo from "../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { searchProduct } from "../../redux/actions";
const SearchBar = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    setCurrentPage(1);
  };
  useEffect(() => {
    dispatch(searchProduct(search));
  }, [search, dispatch]);
  return (
    <div className={style.searchContainer}>
      <h1 className={style.title}>StyleHard</h1>
      <input
        onChange={handleChange}
        className={style.input}
        placeholder="Buscador"
        value={search}
        type="search"
      ></input>
      <img src={logo} />
    </div>
  );
};

export default SearchBar;
