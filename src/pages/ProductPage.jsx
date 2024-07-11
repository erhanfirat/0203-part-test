import axios from "axios";
import { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { productId, productName } = useParams();
  const history = useHistory();

  console.log(productId, productName);

  const goBack = () => {
    // bir önceki url e git
    history.goBack();
    // history.goForward();
    // history.push("/path");
  };

  useEffect(() => {
    if (productId) {
      axios
        .get(
          `https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/${productId}`
        )
        .then((res) => setProduct(res.data));
    }
  }, [productId]);

  return (
    <div>
      <h1>
        <button onClick={goBack}> {"<"} Geri </button>

        {productName.replaceAll("-", " ")}
      </h1>
      <hr />
      <img src={`${product.img}?random=${product.id}`} />

      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.stock}</p>
    </div>
  );
};
