import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const Steps = () => {
  const steps = [
    {
      id: "01",
      image: userIcon,
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: "02",
      image: packageIcon,
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
    },
    {
      id: "03",
      image: rocketIcon,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Get Started In 3 Steps
          </h2>

          <p className="mt-4 text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="
                relative
                bg-white
                border border-gray-200
                rounded-2xl
                p-10
                text-center
                hover:-translate-y-2
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
                {step.id}
              </div>

              <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
