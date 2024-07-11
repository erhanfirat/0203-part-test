import { useEffect, useState } from "react";
import { Button } from "reactstrap";

export const ProductList = ({ products = [] }) => {
  const [filterText, setFilterText] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const newList = products.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );

    setDisplayedProducts(newList);
  }, [filterText, products]);

  return (
    <div>
      <h1>Products List</h1>
      <hr />
      <div>
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <Button color="primary" onClick={() => setFilterText("")}>
          x Clear
        </Button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setFilterText("")}
        >
          x Clear
        </button>
      </div>
      <div className="products-container">
        {displayedProducts.map((product) => (
          <div key={product.id}>
            <img src={`${product.img}?random=${product.id}`} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
