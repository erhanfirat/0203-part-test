import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  useEffect(() => {
    console.warn(
      " *************************** HEADER DID MOUNT ***************************"
    );
  }, []);

  return (
    <header>
      <h1>Sayfama Hoşgeldiniz</h1>
      <nav>
        <NavLink to="/" exact>
          Ana Sayfa
        </NavLink>{" "}
        | <NavLink to="/products">Ürünler</NavLink> |{" "}
        <NavLink to="/contact">İletişim</NavLink>
      </nav>
    </header>
  );
};
