import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const ProductsSection = () => {
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
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold">
            Products
          </button>

          <button className="px-8 py-3 font-semibold text-slate-700">
            Cart (0)
          </button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
