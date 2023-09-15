import style from "./Carousel.module.css";
import imagen1 from "../../assets/images/1.jpg";
import imagen2 from "../../assets/images/2.jpg";
import imagen3 from "../../assets/images/3.jpg";
import imagen4 from "../../assets/images/4.jpg";
import imagen5 from "../../assets/images/5.jpg";
import imagen6 from "../../assets/images/6.jpg";
import imagen7 from "../../assets/images/7.jpg";
import imagen8 from "../../assets/images/8.jpg";
import imagen9 from "../../assets/images/9.jpg";
import imagen10 from "../../assets/images/10.jpg";

import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

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

  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          overflow: "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        {cards.map((i) => (
          <img
            src={i}
            alt="Imagen"
            style={{
              backgroundColor: "aqua",
              fontSize: "50px",
              width: "800px",
              height: "600px",
              flexShrink: 0,
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ))}
      </ul>
      <div>
        {activePageIndex + 1} / {10}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      <ol style={{ display: "flex" }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Carousel;
