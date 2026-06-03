import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";
import { BsCartPlus } from "react-icons/bs";

const ProductsSection = ({
  activeTab,
  setActiveTab,
  cart,
  handleAddToCart,
  handleRemoveItem,
  handleCheckout,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Premium Digital Tools
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center mt-8">
        <div className="bg-gray-100 p-1 rounded-full flex">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "products"
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white"
                : "text-slate-700"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "cart"
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white"
                : "text-slate-700"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {activeTab === "products" ? (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : cart.length === 0 ? (
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center">
            <BsCartPlus className="text-6xl text-purple-600" />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-800">
            Your Cart Is Empty
          </h3>

          <p className="mt-2 text-gray-500 max-w-sm">
            Add products to your cart and they will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-12">
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Total:</p>

              <h3 className="text-3xl font-bold text-slate-800">
                ${cart.reduce((total, item) => total + item.price, 0)}
              </h3>
            </div>

            <button
              onClick={handleCheckout}
              className="btn w-full mt-7 h-12 md:h-12 text-base md:text-lg font-semibold border-none rounded-full text-white bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
