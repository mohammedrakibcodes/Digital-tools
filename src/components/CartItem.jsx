const CartItem = ({ item, handleRemoveItem }) => {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 object-contain"
        />

        <div>
          <h3 className="font-bold text-slate-800">{item.name}</h3>

          <p className="text-sm text-gray-500">${item.price}</p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveItem(item.id)}
        className="btn btn-sm btn-error text-white"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
