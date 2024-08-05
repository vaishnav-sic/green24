import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Background from "../public/images/Background.jpg";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
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
                <h1 className="font-primary font-bold" style={{color:"white", animation: "bounceIn 2s ease-in-out 0s 1 normal forwards"}}>{banner.title}</h1>
                <p className="mt-4" style={{color:'#02fc68', fontWeight:'bold', fontSize:'20px', fontStyle:'italic', animation: "bounceIn 2s ease-in-out 0s 1 normal forwards"}}>{markdownify(banner.content)}</p>
                <style jsx>{`
                  @keyframes bounceIn {
                      0% { transform: scale(0); opacity: 0; }
                      60% { transform: scale(1.1); opacity: 1; }
                      80% { transform: scale(0.9); }
                      100% { transform: scale(1); }
                  }
                `}</style>
                {banner.button.enable && (
                  <Link
                    className="btn btn-primary mt-4"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    {banner.button.label}
                  </Link>
                )}
                {/* <Image
                  className="mx-auto mt-12"
                  src={banner.image}
                  width={750}
                  height={390}
                  alt="banner image"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section bg-theme-light">
          <div className="container">
            <div className="text-center">
              <h2>{markdownify(feature.title)}</h2>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {feature.features.map((item, i) => (
                <div
                  className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
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
            <div className="text-center text-white py-16">
              <h1 className="text-3xl font-bold text-white">What's New in Nature</h1>
              <p className="mt-4">Recent updates, immersive stories, and relevant explainer articles from around The Nature Conservancy.</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-green-900 h-[170px] w-full absolute inset-0"></div>
            <div className="relative max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-white text-black p-8 flex flex-col justify-between h-[330px] w-full">
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
              <div className="bg-white text-black p-8 flex flex-col justify-between h-[330px] w-full">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Gardening is the purest of human pleasures.</h2>
                  <p>Gardening is the purest of human pleasures underscores the intrinsic joy, satisfaction, and fulfillment that gardening brings. It celebrates the fundamental pleasure derived from nurturing life, connecting with nature, and witnessing the beauty of growth and renewal firsthand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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