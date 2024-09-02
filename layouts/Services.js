import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Service Header Component
const ServiceHeader = () => {
  return (
    <div
      className="relative z-10 mt-12 bg-cover bg-center py-6 text-center"
      style={{
        backgroundImage: "url('/images/Headerbg.jpg')",
        marginTop: "100px",
        height: "250px",
      }}
    >
      <h1 className="text-5xl font-bold text-primary">Services</h1>
    </div>
  );
};

// Main About Component
function About({ data }) {
  const { frontmatter } = data;
  const { title, intro, intro_image, section_items, feature } = frontmatter;

  // Animation Effect using Intersection Observer
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

  const NewSection = () => (
    <div
      className="stretch-full relative w-full bg-cover object-fill"
      style={{ maxWidth: "none", marginLeft: "auto", marginRight: "auto" }} // Added inline CSS
    >
      {/* Full-width background color */}
      <div className="z-1 absolute inset-0 bg-green-100 object-fill"></div>

      {/* Centered content */}
      <div
        className="relative z-10 py-12"
        style={{
          maxWidth: "none",
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-animate text-center"
        >
          <ul className="md:mx[5rem] mx-auto mt-4 space-y-4 sm:mx-[2.5rem] lg:mx-[17rem]">
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
              "Red Soil Supply: Supply premium red soil to enrich your garden beds.",
            ].map((service, i) => (
              <motion.li
                key={i}
                className={`flex h-20 items-center justify-center bg-primary p-4 text-white shadow-lg transition-transform duration-300 ease-in-out ${
                  i % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"
                } text-animate w-full sm:w-3/4`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <span className="text-lg leading-tight">
                    <strong>{service.split(":")[0]}</strong>:{" "}
                    {service.split(":")[1]}
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

      <ServiceHeader />
      <section className="section">
        <div
          className="pl-0.1 pr-0.1 container mx-auto"
          style={{ maxWidth: "none", marginLeft: "auto", marginRight: "auto" }} // Added inline CSS
        >
          <NewSection />
        </div>
      </section>
    </>
  );
}

export default About;
