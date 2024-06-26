import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
