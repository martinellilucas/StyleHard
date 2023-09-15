import style from "./Landing.module.css";
import Carousel from "../Carousel/Carousel";

const Landing = () => {
  return (
    <div className={style.body}>
      <h1 className={style.title}>StyleHard</h1>
      <Carousel />
    </div>
  );
};

export default Landing;
