import React from "react";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import BgImage from "../public/images/11.jpg";

const ContactHeader = () => {
  return (
    <div className="bg-cover bg-center text-center  relative z-10 py-6 mt-12" style={{ backgroundImage: "url('/images/naturebg.jpg')", marginTop: '100px', height: '250px' }}>
      <h1 className="text-5xl font-bold leading-tight text-primary absolute bottom-6 left-1/2 transform -translate-x-1/2">Services</h1>
    </div>
  );
};

function About({ data }) {
  const { frontmatter } = data;
  const { title, intro, intro_image, section_items, feature } = frontmatter;

  console.log("Data received: ", data); // Debugging: Check if data is received correctly

  // Intro Section
  const IntroSection = () => (
    <div className="mb-12 flex flex-wrap items-center">
      <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
        <Image
          src={BgImage}
          alt="About Us"
          className="h-auto w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full px-4 md:w-1/2">
        {markdownify(intro, "p", "text-lg text-gray-600")}
      </div>
    </div>
  );

  // Card Section
  const CardSection = () => (
    <section className="section bg-primary">
      <div className="container">
        <div className="text-center ">
          <h2 className="text-white">{markdownify(feature.title)}</h2>
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
  );

  return (
    <>
    <ContactHeader />
    <section className="section">
      <div className="container mx-auto">
        {/* {markdownify(title, "h1", "text-center font-normal mb-8")} */}
        {intro && intro_image && <IntroSection />}
        {section_items && section_items.length > 0 && <CardSection />}
      </div>
    </section>
    </>
  );
}

export default About;
