import imagen1 from "../../assets/images/1.png";
import imagen2 from "../../assets/images/2.png";
import imagen3 from "../../assets/images/3.png";
import imagen4 from "../../assets/images/4.png";
import imagen5 from "../../assets/images/5.png";
import imagen6 from "../../assets/images/6.png";
import imagen7 from "../../assets/images/7.png";
import imagen8 from "../../assets/images/8.png";
import imagen9 from "../../assets/images/9.png";
import imagen10 from "../../assets/images/10.png";
import style from "./Carousel.module.css";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Carousel = () => {
  const cards = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
  ];

  return (
    <MDBCarousel showControls>
      {cards?.map((img) => {
        return <MDBCarouselItem className="w-100" src={img} alt="..." />;
      })}
    </MDBCarousel>
  );
};

export default Carousel;
