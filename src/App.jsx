import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductsSection from "./sections/ProductsSection";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveItem = (id) => {
    const remainingItems = cart.filter((item) => item.id !== id);

    setCart(remainingItems);
  };

  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Stats />
      <ProductsSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleRemoveItem={handleRemoveItem}
        handleCheckout={handleCheckout}
      />
    </>
  );
}

export default App;
