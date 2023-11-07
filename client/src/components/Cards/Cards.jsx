import style from "./Cards.module.css";
import Card from "../Card/Card.jsx";

const Cards = ({ productos }) => {
  return (
    <div className={style.cardsContainer}>
      <hr></hr>
      {productos?.map(
        ({ id, imagen, tipo, marca, descripcion, stock, precio }) => {
          return (
            <div>
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
              <hr />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Cards;
