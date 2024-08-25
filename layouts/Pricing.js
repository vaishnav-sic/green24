import Link from "next/link";
import Cta from "./components/Cta";
import { useEffect } from "react";

const PricingHeader = () => {
  return (
    <div
      className="relative z-10 mt-12 bg-cover bg-center py-6 text-center"
      style={{
        backgroundImage: "url('/images/HeaderBg.jpg')",
        marginTop: "100px",
        height: "250px",
      }}
    >
      <h1 className="text-animate text-5xl font-bold text-primary">Pricing</h1>
    </div>
  );
};

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;

  useEffect(() => {
    const elements = document.querySelectorAll(".text-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <PricingHeader />
      <h1 className="text-4xl font-bold leading-tight mt-8 text-primary mb-12 text-center">
          Charges Of Maintenance & Services
      </h1>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 2s ease-in-out, transform 1.5s ease-in-out;
        }

        .text-animate.animate {
          animation: fadeInUp 2s ease-in-out forwards;
        }
      `}</style>
      <section className="section pb-0 pt-0">
        <div className="container">
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${
                  !plan.recommended ? "lg:px-0" : "col-recommended"
                }`}
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h4 className="text-animate">{plan.title}</h4>
                  <div className="text-animate mt-5">
                    <span className="text-5xl text-dark">₹{plan.price}</span>
                    <span>/ {plan.type}</span>
                  </div>
                  <h5 className="text-animate mt-2 font-normal text-text">
                    {plan.subtitle}
                  </h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li
                        className="text-animate mb-[10px] leading-5"
                        key={index}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={`btn mt-5 ${
                      plan.recommended ? "btn-primary" : "btn-outline-primary"
                    } text-animate`}
                    href={plan.button.link}
                    rel={plan.button.rel}
                  >
                    {plan.button.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-green-700">
        <div className="container mx-auto mt-10 rounded-3xl bg-green-700 px-4">
          <h1 className="text-animate mb-6 pt-6 text-center text-3xl font-bold text-white">
            Our Services and Pricing
          </h1>
          <div className="overflow-x-auto">
            <table className="mx-auto mb-8 w-3/4 bg-white font-bold text-green-900">
              <thead>
                <tr>
                  <th className="border bg-green-900 px-4 py-2 text-center text-xl text-white">
                    Services
                  </th>
                  <th className="border bg-green-900 px-4 py-2 text-center text-xl text-white">
                    Pricing
                  </th>
                  <th className="border bg-green-900 px-4 py-2 text-center text-xl text-white">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    Lawn Grass Fitting
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    10 Rs.
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    1 Square Feet.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    Reporting Plants
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    100 Rs.
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    1 Plant
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    New Plant Plantation-7*5
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    20 Rs.
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    1 Plant.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    New Plant Plantation-7*8
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    30 Rs.
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    1 Plant
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    New Plant Plantation-8*10
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    40 Rs.
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    1 Plant.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    New Plant Plantation-13*13
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    80 Rs.
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    1 Plant.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    New Plant Plantation-15*16
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    120 Rs.
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    1 Plant.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    New Plant Plantation-21*21
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    200 Rs.
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    1 Plant.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    Spread The Soil
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    1200 Rs.
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    1 Brass.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    Vertical Garden- With Material
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    1200 Rs.
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    1 Square Feet.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    Lawn Grass Maintenance With Cutting
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    5 Rs.
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    1 Square Feet.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    Fertilizer Manure
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    100 Rs.
                  </td>
                  <td className="text-animate border bg-green-500 px-4 py-2 text-white">
                    1 Brass.
                  </td>
                </tr>
                <tr>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    Mulching
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    500 Rs.
                  </td>
                  <td className="text-animate border bg-green-300 px-4 py-2 text-green-950">
                    1 Brass.
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-center text-xl font-bold text-orange-300">
              All Maintenance Charge Will Be Change As Per Quantity.
            </p>
            <p className="text-center text-xl font-bold text-white">
              Note: This All Charges Are Without Material.
            </p>
            <p className="pb-6 text-center text-xl font-bold text-orange-400">
              For Plantation Required Minimum More Than 100 Plants
            </p>
          </div>
        </div>
      </div>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
