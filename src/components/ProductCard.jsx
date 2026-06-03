import { FaCheck } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { image, name, description, price, period, tag, features } = product;

  const badgeColor = {
    "Best Seller": "badge-success",
    Popular: "badge-warning",
    New: "badge-info",
  };

  const badgeClass = badgeColor[tag] || "badge-neutral";
  return (
    <div
      className="
        card bg-white
        border border-gray-200
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-2
        transition-all duration-300
      "
    >
      <div className="card-body p-6">
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50">
            <img src={image} alt={name} className="w-8 h-8 object-contain" />
          </div>

          <span
            className={`badge ${badgeClass} rounded-full px-3 py-3 font-medium`}
          >
            {tag}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-slate-800">{name}</h2>

        <p className="text-gray-500 text-sm leading-6">{description}</p>

        <div className="mt-2">
          <span className="text-4xl font-extrabold text-slate-900">
            ${price}
          </span>

          <span className="text-gray-400 ml-1">/{period}</span>
        </div>

        <ul className="mt-2 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600">
              <FaCheck className="text-green-500 text-xs shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className="
            btn
            mt-4
            w-full
            rounded-full
            border-none
            text-white
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-500
            hover:scale-[1.02]
            hover:shadow-lg
            transition-all duration-300
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
