import style from "./ItemCount.module.css";
export const ItemCount = ({ max, min = 0, counter, setCounter }) => {
  const handleSumar = () => {
    counter < max && setCounter(counter + 1);
  };

  const handleRestar = () => {
    counter > min && setCounter(counter - 1);
  };

  return (
    <div className={style.container}>
      <button
        className={style.button}
        style={{ marginLeft: "70px" }}
        onClick={handleRestar}
      >
        -
      </button>
      <span className={style.span}>{counter}</span>
      <button onClick={handleSumar} className={style.button}>
        +
      </button>
    </div>
  );
};
