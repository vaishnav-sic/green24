import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Background from "../public/images/Background.jpg";
import Link from "next/link";
import { getListPage } from "../lib/contentParser";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from "react";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  const ContactHeader = () => {
    return (
      <div className="bg-cover bg-center text-center  relative z-10 py-6 mt-12" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/bg (2).jpg')", marginTop: '50px', height: '250px' }}>
        <h1 className="text-5xl font-bold leading-tight text-primary absolute bottom-6 left-1/2 transform -translate-x-1/2" style={{bottom: '50%', left: '50%', transform: 'translate(-50%, 50%)', }}>"Gardens are where we find peace and beauty"</h1>
      </div>
    );
  };  

  useEffect(() => {
    const elements = document.querySelectorAll('.text-animate');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

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
    <Base title={title}>
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

      <div className="content">
        {/* Banner */}
        <section
          className="section pb-[50px] bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background.src})`,
            height: '700px' 
          }}
        >
          <div className="whatsapp-icon" style={{position:"fixed", right:"20px", bottom:"20px", zIndex:"10000"}}>
            <a
              href="https://api.whatsapp.com/send?phone=919921055678"
              target="_blank"
              rel="noopener noreferrer"
            >
            <i
              className="fab fa-whatsapp"
              style={{
              fontSize: "30px",
              color: "#25d366",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "50%",
              boxShadow: "5px 4px 6px rgba(0, 0, 0, 1)",
              transition: "background-color 0.3s, box-shadow 0.3s",
              }}
            ></i>
            </a>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="mx-auto lg:col-10">
                <h1 className="font-primary font-bold text-animate" style={{color:"white"}}>{banner.title}</h1>
                <p className="mt-4 text-animate" style={{color:'#02fc68', fontWeight:'bold', fontSize:'20px', fontStyle:'italic'}}>{markdownify(banner.content)}</p>
                {banner.button.enable && (
                  <Link
                    className="btn btn-primary mt-4 text-animate"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    {banner.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section bg-theme-light">
          <div className="container">
            <div className="text-center">
              <h2 className="text-animate">{markdownify(feature.title)}</h2>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {feature.features.map((item, i) => (
                <div
                  className="feature-card rounded-xl bg-white p-5 pb-8 text-center text-animate"
                  key={`feature-${i}`}
                >
                  {item.icon && (
                    <Image
                      className="mx-auto"
                      src={item.icon}
                      width={30}
                      height={30}
                      alt=""
                    />
                  )}
                  <div className="mt-4">
                    {markdownify(item.name, "h3", "h5")}
                    <p className="mt-3">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* services */}
        <div>
          <div className="bg-green-900">
            <div className="text-center text-white py-16 text-animate">
              <h1 className="text-3xl font-bold text-white">What's New in Nature</h1>
              <p className="mt-4">Recent updates, immersive stories, and relevant explainer articles from around The Nature Conservancy.</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-green-900 h-[170px] w-full absolute inset-0"></div>
            <div className="relative max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-white text-black p-8 flex flex-col justify-between h-[330px] w-full text-animate">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Gardening is the art that uses flowers and plants as paint, and the soil and sky as canvas.</h2>
                  <p>Flowers and plants as paint suggests that gardeners carefully select and arrange plants much like an artist chooses colors to create a painting. Soil and sky as canvas emphasizes the importance of the natural environment in which gardens thrive.</p>
                </div>
              </div>
              <div className="flex justify-center items-center h-[330px] w-full">
                <img src="/images/G4.jpg" alt="Marsh" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="bg-white ">
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="flex justify-center items-center h-[330px] w-full">
                <img src="/images/G5 new.jpg" alt="Bird's Head" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white text-black p-8 flex flex-col justify-between h-[330px] w-full text-animate">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Gardening is the purest of human pleasures.</h2>
                  <p>Gardening is the purest of human pleasures underscores the intrinsic joy, satisfaction, and fulfillment that gardening brings. It celebrates the fundamental pleasure derived from nurturing life, connecting with nature, and witnessing the beauty of growth and renewal firsthand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactHeader />

        {/* workflow */}
        {/* <section className="section pb-0">
          <div className="mb-8 text-center">
            {markdownify(
              workflow.title,
              "h2",
              "mx-auto max-w-[400px] font-bold leading-[44px]"
            )}
            {markdownify(workflow.description, "p", "mt-3")}
          </div>
          <Image
            src={workflow.image}
            alt="workflow image"
            width={1920}
            height={296}
          />
        </section> */}

        {/* Cta */}
        {/* <Cta cta={call_to_action} /> */}
      </div>
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
