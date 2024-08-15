import Link from "next/link";
import Cta from "./components/Cta";

const PricingHeader = () => {
  return (
    <div className="bg-cover bg-center text-center  relative z-10 py-6 mt-12" style={{ backgroundImage: "url('/images/HeaderBg.jpg')", marginTop: '100px', height: '250px' }}>
      <h1 className="text-5xl font-bold text-primary">Pricing</h1>
    </div>
  );
};

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  return (
    <>
    <PricingHeader />
      <section className="section pb-0">
        <div className="container">
          {/* <h1 className="text-center font-normal">{title}</h1> */}
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${
                  !plan.recommended ? "lg:px-0" : "col-recommended"
                }`}
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h4>{plan.title}</h4>
                  <div className="mt-5">
                    <span className="text-5xl text-dark">₹{plan.price}</span>
                    <span>/ {plan.type}</span>
                  </div>
                  <h5 className="mt-2 font-normal text-text">
                    {plan.subtitle}
                  </h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="mb-[10px] leading-5" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={`btn mt-5 ${
                      plan.recommended ? "btn-primary" : "btn-outline-primary"
                    }`}
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
      <div className="container mx-auto px-4 mt-10 bg-green-700 rounded-3xl">
      <h1 className="text-3xl font-bold text-center text-white pt-6 mb-6">Our Services and Pricing</h1>
        <div className="overflow-x-auto">
          <table className="w-3/4 mx-auto bg-white text-green-900 font-bold mb-8">
            <thead>
              <tr>
                <th className="border py-2 px-4 text-white bg-green-900 text-centre text-xl">Services</th>
                <th className="border py-2 px-4 text-white bg-green-900 text-centre text-xl">Pricing</th>
                <th className="border py-2 px-4 text-white bg-green-900 text-centre text-xl">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-green-950 bg-green-300">Lawn Grass Fitting</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">10 Rs.</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">1 Square Feet.</td>              
              </tr>
              <tr>
                <td className="border px-4 py-2 text-white bg-green-500">Reporting Plants</td>
                <td className="border px-4 py-2 text-white bg-green-500">100 Rs.</td>
                <td className="border px-4 py-2 text-white bg-green-500">1 Plant</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-green-950 bg-green-300">New Plant Plantation-7*5</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">20 Rs.</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">1 Plant.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-white bg-green-500">New Plant Plantation-7*8</td>
                <td className="border px-4 py-2 text-white bg-green-500">30 Rs.</td>
                <td className="border px-4 py-2 text-white bg-green-500">1 Plant</td>              
              </tr>
              <tr>
                <td className="border px-4 py-2 text-green-950 bg-green-300">New Plant Plantation-8*10</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">40 Rs.</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">1 Plant.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-white bg-green-500">New Plant Plantation-13*13</td>
                <td className="border px-4 py-2 text-white bg-green-500">80 Rs.</td>
                <td className="border px-4 py-2 text-white bg-green-500">1 Plant.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-green-950 bg-green-300">New Plant Plantation-15*16</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">120 Rs.</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">1 Plant.</td>              
              </tr>
              <tr>
                <td className="border px-4 py-2 text-white bg-green-500">New Plant Plantation-21*21</td>
                <td className="border px-4 py-2 text-white bg-green-500">200 Rs.</td>
                <td className="border px-4 py-2 text-white bg-green-500">1 Plant.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-green-950 bg-green-300">Spread The Soil</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">1200 Rs.</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">1 Brass.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-white bg-green-500">Vertical Garden- With Material</td>
                <td className="border px-4 py-2 text-white bg-green-500">800 Rs.</td>
                <td className="border px-4 py-2 text-white bg-green-500">1 Square Feet.</td>              
              </tr>
              <tr>
                <td className="border px-4 py-2 text-green-950 bg-green-300">Lawn Grass Maintenance With Cutting</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">5 Rs.</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">1 Square Feet.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-white bg-green-500">Lawn Grass Cutting</td>
                <td className="border px-4 py-2 text-white bg-green-500">3 Rs.</td>
                <td className="border px-4 py-2 text-white bg-green-500">1 Square Feet.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-green-950 bg-green-300">Garden Maintenance - Required Minimum 1000 sqft.</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">5 Rs.</td>
                <td className="border px-4 py-2 text-green-950 bg-green-300">1 Square Feet.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-white bg-green-500">Only Pot Maintenance</td>
                <td className="border px-4 py-2 text-white bg-green-500">100Rs.</td>
                <td className="border px-4 py-2 text-white bg-green-500">1 Pot.</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <p className="text-center text-orange-300 font-bold text-xl">All Maintenance Charge Will Be Change As Per Quantity.</p>
          <p className="text-center text-white font-bold text-xl">Note: This All Charges Are Without Material..</p>
          <p className="text-center text-orange-400 font-bold text-xl pb-6">For Plantation Required Minimum More Than 100 Plants</p>
        </div>
      </div>

      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
