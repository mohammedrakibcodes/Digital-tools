const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 text-center">
          <div className="border-r border-white/30">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
              50K+
            </h2>

            <p className="mt-1 text-xs sm:text-sm md:text-xl text-white/90">
              Active Users
            </p>
          </div>

          <div className="border-r border-white/30">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
              200+
            </h2>

            <p className="mt-1 text-xs sm:text-sm md:text-xl text-white/90">
              Premium Tools
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
              4.9
            </h2>

            <p className="mt-1 text-xs sm:text-sm md:text-xl text-white/90">
              Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
