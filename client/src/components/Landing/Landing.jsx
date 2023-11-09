import style from "./Landing.module.css";
import Carousel from "../Carousel/Carousel";
import Login from "../Login/Login";

const Landing = () => {
  return (
    <div className={style.body}>
      <h1 className={style.title}>StyleHard</h1>
      <Login />
      <Carousel />
    </div>
  );
};

export default Landing;
