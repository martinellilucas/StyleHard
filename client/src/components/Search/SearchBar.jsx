import style from "./SearchBar.module.css";
import logo from "../../assets/images/logo.png";

const SearchBar = () => {
  return (
    <div className={style.searchContainer}>
      <h1 className={style.title}>StyleHard</h1>
      <input className={style.input} placeholder="Buscador"></input>
      <img src={logo} />
    </div>
  );
};

export default SearchBar;
