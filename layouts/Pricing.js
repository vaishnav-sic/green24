import Link from "next/link";
import Cta from "./components/Cta";

const ContactHeader = () => {
  return (
    <div className="bg-cover bg-center text-center  relative z-10 py-6 mt-12" style={{ backgroundImage: "url('/images/naturebg.jpg')", marginTop: '100px', height: '250px' }}>
      <h1 className="text-5xl font-bold leading-tight text-primary absolute bottom-6 left-1/2 transform -translate-x-1/2">Pricing</h1>
    </div>
  );
};

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  return (
    <>
    <ContactHeader />
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
      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
