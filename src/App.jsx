import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductsSection from "./sections/ProductsSection";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);

    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveItem = (id) => {
    const product = cart.find((item) => item.id === id);

    const remainingItems = cart.filter((item) => item.id !== id);

    setCart(remainingItems);

    toast.error(`${product.name} removed`);
  };

  const handleCheckout = () => {
    setCart([]);

    toast.success("Order placed successfully!");
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
      <Steps />
      <Pricing />
      <CTA />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
