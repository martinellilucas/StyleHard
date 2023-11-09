import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Productos from "./components/Productos/Productos";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Auth0Provider
      domain="dev-7nbk3insf1dr67c3.us.auth0.com"
      clientId="DB6UyJGmIEzDpChRpnKg84YqxB57mxd0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
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
    </Auth0Provider>
  );
}

export default App;
