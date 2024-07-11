import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { PageContent } from "./layout/PageContent";
import axios from "axios";
import Slider from "./components/Slider";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Uygulamanın yüklenme anı
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        // set state
        setProducts(res.data);
      })
      .catch((err) => {
        // log error
      });

    console.warn(
      " *************************** APP DID MOUNT ***************************"
    );
  }, []);

  useEffect(() => {
    console.warn(
      " *************************** APP DID UPDATE ***************************"
    );
  });

  return (
    <>
      <Header />
      <Slider />
      <PageContent user={user} setUser={setUser} products={products} />
      <Footer />
    </>
  );
}

export default App;
