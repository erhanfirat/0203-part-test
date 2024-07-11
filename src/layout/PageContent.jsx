import { useEffect } from "react";
import { HomePage } from "../pages/HomePage";
import { ProductList } from "../pages/ProductList";

export const PageContent = ({ user, setUser, products }) => {
  useEffect(() => {
    console.warn(
      " *************************** PAGE CONTENT DID MOUNT ***************************"
    );
  }, []);

  return (
    <div>
      <HomePage user={user} setUser={setUser} />

      <ProductList products={products} />
    </div>
  );
};
