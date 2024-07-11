import { useEffect } from "react";
import { HomePage } from "../pages/HomePage";
import { ProductList } from "../pages/ProductList";
import { Route, Switch } from "react-router-dom";
import { ContactPage } from "../pages/ContactPage";
import { NotFound } from "../pages/NotFound";
import { ProductPage } from "../pages/ProductPage";

export const PageContent = ({ user, setUser, products }) => {
  useEffect(() => {
    console.warn(
      " *************************** PAGE CONTENT DID MOUNT ***************************"
    );
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage user={user} setUser={setUser} />
        </Route>
        <Route path="/products" exact>
          <ProductList products={products} />
        </Route>
        <Route path="/product/:productId/:productName" exact>
          <ProductPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
