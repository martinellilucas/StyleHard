import { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import style from "./About.module.css";

const About = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Su mensaje ha sido enviado con éxito");
  };
  return (
    <div id="contact" className={style.body}>
      <form onSubmit={sendEmail} id="form" className={style.form}>
        <div className={style.section}>
          <label htmlFor="name" className={style.label}>
            <FaCheckSquare color="grey" size={30} />{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            className={style.input}
          ></input>
        </div>
        <div className={style.section}>
          <label htmlFor="email" className={style.label}>
            <FaCheckSquare color="grey" size={30} />{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder={"Email"}
            className={style.input}
          ></input>
        </div>
        <div className={style.section}>
          <label htmlFor="message" className={style.label}>
            <FaCheckSquare color="grey" size={30} />{" "}
          </label>
          <input
            name="message"
            id="message"
            placeholder={"Mensaje"}
            className={style.input}
          ></input>
        </div>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
      <div className={style.line}></div>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Contacto</h1>
      </div>
    </div>
  );
};

export default About;
