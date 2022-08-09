import { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.styles.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>cargando</div>
      ) : products ? (
        <section className="ItemListContainer_container">
          <h2>Mais Vendidos</h2>
          <p></p>
          <ItemList products={products} />
        </section>
      ) : (
        <h1>El listado no existe</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
