import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#07112B] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
     
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
     
          <div className="col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold">DigiTools</h2>

            <p className="mt-3 text-xs md:text-sm text-gray-400 leading-5 md:leading-6 max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3">Product</h3>

            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3">Company</h3>

            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3">
              Resources
            </h3>

            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>

            <div className="mt-4">
              <h3 className="font-semibold text-base md:text-lg mb-3">
                Social Links
              </h3>

              <div className="flex gap-2 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition">
                  <FaInstagram size={12} />
                </div>

                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition">
                  <FaFacebook size={12} />
                </div>

                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition">
                  <BsTwitterX size={11} />
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="border-t border-slate-700 mt-8 md:mt-10 pt-4 md:pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <FaCopyright />
              2026 DigiTools. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>

              <p className="hover:text-white cursor-pointer">
                Terms of Service
              </p>

              <p className="hover:text-white cursor-pointer">Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
