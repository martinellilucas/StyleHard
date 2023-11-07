import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Productos from "./components/Productos/Productos";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/productos"
          element={
            <Productos
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
