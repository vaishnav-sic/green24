import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Background from "../public/images/Background.png";
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
            backgroundImage: `url(${Background.src})`,
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
                <h1 className="font-primary font-bold" style={{color:"#f79915", textShadow: "3px 2px 4px rgba(0, 0, 0, 1.5)", animation: "bounceIn 2s ease-in-out 0s 1 normal forwards"}}>{banner.title}</h1>
                <p className="mt-4" style={{color:'navy', fontWeight:'bold', fontSize:'20px', fontStyle:'italic', animation: "bounceIn 2s ease-in-out 0s 1 normal forwards"}}>{markdownify(banner.content)}</p>
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
        {services.map((service, index) => {
          const isOdd = index % 2 > 0;
          return (
            <section
              key={`service-${index}`}
              className={`section ${isOdd && "bg-theme-light"}`}
            >
              <div className="container">
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                  {/* Carousel */}
                  <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      pagination={
                        service.images.length > 1 ? { clickable: true } : false
                      }
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      init={service?.images > 1 ? false : true}
                    >
                      {/* Slides */}
                      {service?.images.map((slide, index) => (
                        <SwiperSlide key={index}>
                          <Image src={slide} alt="" width={600} height={500} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Content */}
                  <div
                    className={`service-content mt-5 md:mt-0 ${
                      !isOdd && "md:order-1"
                    }`}
                  >
                    <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                    <p className="mt-4 mb-2">{service?.content}</p>
                    {service.button.enable && (
                      <Link
                        href={service?.button.link}
                        className="cta-link inline-flex items-center text-primary"
                      >
                        {service?.button.label}
                        <Image
                          className="ml-1"
                          src="/images/arrow-right.svg"
                          width={18}
                          height={14}
                          alt="arrow"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

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


