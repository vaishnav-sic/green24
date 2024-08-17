import React from "react";
import { motion } from "framer-motion";

const ServiceHeader = () => {
  return (
    <div
      className="bg-cover bg-center text-center relative z-10 py-6 mt-12"
      style={{
        backgroundImage: "url('/images/HeaderBg.jpg')",
        marginTop: "100px",
        height: "250px",
      }}
    >
      <h1 className="text-5xl font-bold text-primary">
        Services
      </h1>
    </div>
  );
};

function About({ data }) {
  const { frontmatter } = data;
  const { title, intro, intro_image, section_items, feature } = frontmatter;

  const NewSection = () => (
    <div className="relative bg-cover w-full object-fill stretch-full">
      {/* Full-width background color */}
      <div className="absolute inset-0 object-fill bg-green-100 z-0"></div>
  
      {/* Centered content */}
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <ul className="mt-4 space-y-4">
            {[
              "Lawn Care: Providing services like mowing, trimming, and fertilizing lawns.",
              "Planting and Maintenance: Planting flowers, shrubs, trees, and maintaining them.",
              "Weeding: Removing weeds to keep the garden tidy.",
              "Landscaping: Designing and creating landscapes, including paths, patios, and other features.",
              "Irrigation: Installing and maintaining irrigation systems.",
              "Pruning: Trimming and shaping trees and bushes.",
              "Mulching: Applying mulch to help with weed control and soil moisture.",
              "Pest and Disease Control: Managing pests and diseases in the garden.",
              "Garden Cleanup: Seasonal cleaning and debris removal.",
              "Plant Trimming: Enhancing the health and aesthetics of garden by expertly trimming.",
              "Soil Spread: Evenly distributed high-quality soil support healthy plant development.",
              "Garden Consultant: Giving advice on garden design, plant selection, and maintenance.",
              "Plants Growth Specialist: Boost plant Growth with expert advice and tailored techniques.",
              "Red Soil Supply: Supply premium red soil to enrich your garden beds."
            ].map((service, i) => (
              <motion.li
                key={i}
                className={`flex items-center justify-center h-20 bg-primary text-white p-4 shadow-lg transition-transform duration-300 ease-in-out ${
                  i % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"
                } w-full sm:w-3/4`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <span className="text-lg leading-tight">
                    <strong>{service.split(":")[0]}</strong>: {service.split(":")[1]}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 space-y-4">
            <a
              href="https://photos.app.goo.gl/D5JkZG31nGRCU5pn6"
              className="block text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              To watch videos of our completed projects, click here.
            </a>
            <a
              href="https://photos.app.goo.gl/hUE6pFse4dRYrKsFA"
              className="block text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              To see photos of our gardening work, click here.
            </a>
            <a
              href="https://photos.app.goo.gl/ZpEG9EYUasi5vHz77"
              className="block text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Gardening Idea Please Click Here.
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <>
      <ServiceHeader />
      <section className="section">
        <div className="container mx-auto">
          {/* {markdownify(title, "h1", "text-center font-normal mb-8")} */}
          <NewSection />
        </div>
      </section>
    </>
  );
}

export default About;


