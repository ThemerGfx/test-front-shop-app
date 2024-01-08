import { useEffect, useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import ProductsList from "./ProductsList";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function App() {
  const [allProducts, setallProducts] = useState([]);
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProductsList data={allProducts} />,
    },
    {
      path: "/products/:id",
      element: <ProductDetails />,
    },
    {
      path: "cart",
      element: <Cart data={allProducts} />,
    },
  ]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setallProducts(json);
      });
  }, []);

  return <div className="App">{element}</div>;
}

export default App;
