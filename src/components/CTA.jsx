const CTA = () => {
  return (
    <section className="py-20">
      <div
        className="
          bg-gradient-to-r
          from-purple-700
          via-purple-600
          to-fuchsia-600
          py-20
          px-4
        "
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mt-4 text-purple-100">
            Join thousands of professionals who are already using DigiTools to
            work smarter. Start your free trial today.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="
                btn
                rounded-full
                border-none
                bg-white
                text-purple-600
                hover:bg-gray-100
              "
            >
              Explore Products
            </button>

            <button
              className="
                btn
                rounded-full
                bg-transparent
                border-white
                text-white
                hover:bg-white
                hover:text-purple-600
              "
            >
              View Pricing
            </button>
          </div>

          <p className="mt-6 text-sm text-purple-200">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
