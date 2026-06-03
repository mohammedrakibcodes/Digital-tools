import bannerImg from "../assets/banner.png";
import { FaPlay } from "react-icons/fa";
import { LuArrowBigRightDash } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
            </span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-800">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-9 max-w-xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              className="
              w-full sm:w-auto
              flex items-center justify-center gap-2
               bg-gradient-to-r from-purple-600 to-fuchsia-500
                 text-white font-semibold
                 px-7 py-4
                 rounded-full
                 shadow-lg
                 transition-all duration-300
                  hover:-translate-y-1
                 hover:scale-105
                 hover:shadow-xl
                  active:translate-y-1
                 active:scale-95
                 cursor-pointer
  "
            >
              <span>Explore More</span>
              <LuArrowBigRightDash className="text-xl shrink-0" />
            </button>

            <button
              className="
                w-full sm:w-auto
                flex items-center justify-center gap-3
                border-2 border-purple-500
                bg-white
                text-purple-600
                font-semibold
                px-7 py-4
                rounded-full
                shadow-md
                transition-all duration-300
                hover:bg-purple-500
                hover:text-white
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-lg
                active:translate-y-1
                active:scale-95
                cursor-pointer
              "
            >
              <FaPlay className="text-sm shrink-0" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={bannerImg}
            alt="Digital Tools Banner"
            className="w-full max-w-md lg:max-w-lg rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
