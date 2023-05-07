import {useContext} from "react";

import "../styles/Cart.css";
import {ContextCart} from "../context/ContextCart";
import {subtotalSumOperation} from "../utils/operations";
import { AddedProduct } from "../types";

const Cart = () => {
  const {setIsOpen, isOpen, addedProduct, setAddedProduct} = useContext(ContextCart);

  const closeCart = () => setIsOpen(false);

  const removeProduct = (id: string) => {
    setAddedProduct(addedProduct.filter((product) => product.id !== id));
    addedProduct.length < 1 && isOpen === true ? setIsOpen(false) : null;
  };

  const operation = subtotalSumOperation(addedProduct);

  return (
    <aside>
      {addedProduct.length > 0 ? (
        <div className="wrapper">
          <h3>Cart y numero de items</h3>
          <div className="top-cart">
            <h4>Your cart</h4>{" "}
            <button className="close-button" onClick={closeCart}>
              X
            </button>
          </div>
          <div>
            {addedProduct.map((product:AddedProduct) => (
              <div key={product.id} className="card-cart">
                <div>
                  <h5>{product.title}</h5>
                  <img alt="" className="cart-img" src={product.image} />
                </div>
                <div className="info-cart">
                  <p>$ {product.price}</p>
                  <input type="number" />
                </div>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
              </div>
            ))}
            <p>Subtotal</p>
            <p>{operation}</p>
            <button>Continue to checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h3>No hay artículos añadidos aún</h3>
          <button className="close-button-empty" onClick={closeCart}>
            X
          </button>
        </div>
      )}
    </aside>
  );
};

export default Cart;
