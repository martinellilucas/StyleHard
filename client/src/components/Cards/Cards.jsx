import style from "./Cards.module.css";
import Card from "../Card/Card.jsx";
import { productos } from "./mock.js";

const Cards = () => {
  return (
    <div className={style.cardsContainer}>
      {productos?.map(
        ({ id, imagen, tipo, marca, descripcion, stock, precio }) => {
          return (
            <Card
              key={id}
              id={id}
              imagen={imagen}
              tipo={tipo}
              marca={marca}
              descripcion={descripcion}
              stock={stock}
              precio={precio}
            ></Card>
          );
        }
      )}
    </div>
  );
};

export default Cards;
