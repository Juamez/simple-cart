import {useContext} from "react";

import "../styles/Header.css";
import {ContextCart} from "../context/ContextCart";

const Header = () => {
  const {setIsOpen} = useContext(ContextCart);

  const openCart = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        Estampitiency
        <p onClick={openCart}>Cart</p>
      </header>
    </>
  );
};

export default Header;
