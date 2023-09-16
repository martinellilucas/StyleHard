import style from "./Landing.module.css";
import Carousel from "../Carousel/Carousel";
import logo from "../../assets/images/logo.png";

const Landing = () => {
  return (
    <div className={style.body}>
      <h1 className={style.title}>
        <img src={logo} />
        StyleHard
        <img src={logo} />
      </h1>
      <Carousel />
    </div>
  );
};

export default Landing;
