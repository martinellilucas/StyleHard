import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Productos from "./components/Productos/Productos";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Armado from "./components/Armado/Armado";
import Registro from "./components/Registro/Registro";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/armado" element={<Armado />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
