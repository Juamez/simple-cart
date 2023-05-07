import {useEffect, useState, useContext} from "react";

import {Product, AddedProduct} from "./types";
import {ContextCart} from "./context/ContextCart";
import api from "./api";
import "./styles/App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const {isOpen, setIsOpen, addedProduct, setAddedProduct} = useContext(ContextCart);

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  const addProductToCart = (
    idProduct: string,
    titleProduct: string,
    imageProduct: string,
    priceProduct: number,
  ): void => {
    setIsOpen(true);
    const productsAdded: AddedProduct[] = [
      ...addedProduct,
      {
        id: idProduct,
        title: titleProduct,
        image: imageProduct,
        price: priceProduct,
      },
    ];

    setAddedProduct(productsAdded);
  };

  return (
    <main>
      <Header />
      {isOpen && <Cart />}
      <section>
        {products.map((product) => (
          <article key={product.id}>
            <img src={product.image} />
            <div>
              <p>{product.title}</p>
              <p>{product.description}</p>
            </div>
            <button
              onClick={() =>
                addProductToCart(product.id, product.title, product.image, product.price)
              }
            >
              Agregar
            </button>
          </article>
        ))}
      </section>
      <footer>
        Encontrá la consigna de este ejercicio y otros más{" "}
        <a href="https://github.com/goncy/interview-challenges/tree/main/simple-cart">acá</a>
      </footer>
    </main>
  );
}

export default App;
