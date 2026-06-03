import cartIcon from "../assets/products/shopping-cart.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-purple-600">
            <a href="#">DigiTools</a>
          </h1>

          <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-semibold">
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                FAQ
              </a>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="relative">
              <img
                src={cartIcon}
                alt="cart"
                className="w-6 h-6 cursor-pointer"
              />

              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            <button className="font-semibold text-gray-800">Login</button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 lg:px-7 py-3 rounded-full transition-all duration-300">
              Get Started
            </button>
          </div>

          <div className="md:hidden dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <GiHamburgerMenu />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
