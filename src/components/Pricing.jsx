import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Simple, Transparent Pricing
          </h2>

          <p className="mt-4 text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="card-body">
              <h2 className="text-3xl font-bold">Starter</h2>

              <p className="text-gray-500">Perfect for getting started</p>

              <div className="mt-4">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-gray-500">/Month</span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  Access to 10 free tools
                </li>
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  Basic templates
                </li>
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  Community support
                </li>
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />1 project
                  per month
                </li>
              </ul>

              <button className="btn mt-8 rounded-full border-none text-white bg-gradient-to-r from-purple-600 to-fuchsia-500">
                Get Started Free
              </button>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-xl relative hover:scale-[1.02] transition-all duration-300">
            <div className="card-body">
              <span className="badge badge-warning absolute top-0 left-1/2 -translate-x-1/2">
                Most Popular
              </span>

              <h2 className="text-3xl font-bold mt-4">Pro</h2>

              <p className="text-purple-100">Best for professionals</p>

              <div className="mt-4">
                <span className="text-5xl font-bold">$29</span>
                <span>/Month</span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                <li>
                  <FaCheck className="inline mr-2" />
                  Access to all premium tools
                </li>
                <li>
                  <FaCheck className="inline mr-2" />
                  Unlimited templates
                </li>
                <li>
                  <FaCheck className="inline mr-2" />
                  Priority support
                </li>
                <li>
                  <FaCheck className="inline mr-2" />
                  Unlimited projects
                </li>
                <li>
                  <FaCheck className="inline mr-2" />
                  Cloud sync
                </li>
                <li>
                  <FaCheck className="inline mr-2" />
                  Advanced analytics
                </li>
              </ul>

              <button className="btn mt-6 rounded-full bg-white text-purple-600 border-none hover:bg-gray-100">
                Start Pro Trial
              </button>
            </div>
          </div>

          <div className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="card-body">
              <h2 className="text-3xl font-bold">Enterprise</h2>

              <p className="text-gray-500">For teams and businesses</p>

              <div className="mt-4">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-gray-500">/Month</span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  Everything in Pro
                </li>
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  Team collaboration
                </li>
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  Custom integrations
                </li>
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  Dedicated support
                </li>
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  SLA guarantee
                </li>
                <li>
                  <FaCheck className="inline text-green-500 mr-2" />
                  Custom branding
                </li>
              </ul>

              <button className="btn mt-8 rounded-full border-none text-white bg-gradient-to-r from-purple-600 to-fuchsia-500">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
