// import React from "react";
// import { markdownify } from "@lib/utils/textConverter";
// import Image from "next/image";
// import BgImage from "../public/images/11.jpg";

// const ContactHeader = () => {
//   return (
//     <div className="bg-cover bg-center text-center  relative z-10 py-6 mt-12" style={{ backgroundImage: "url('/images/naturebg.jpg')", marginTop: '100px', height: '250px' }}>
//       <h1 className="text-5xl font-bold leading-tight text-primary absolute bottom-6 left-1/2 transform -translate-x-1/2">Services</h1>
//     </div>
//   );
// };

// function About({ data }) {
//   const { frontmatter } = data;
//   const { title, intro, intro_image, section_items, feature } = frontmatter;

//   console.log("Data received: ", data); // Debugging: Check if data is received correctly

//   // Intro Section
//   const IntroSection = () => (
//     <div className="mb-12 flex flex-wrap items-center">
//       <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
//         <Image
//           src={BgImage}
//           alt="About Us"
//           className="h-auto w-full rounded-lg shadow-lg"
//         />
//       </div>
//       <div className="w-full px-4 md:w-1/2">
//         {markdownify(intro, "p", "text-lg text-gray-600")}
//       </div>
//     </div>
//   );

//   // Card Section
//   const CardSection = () => (
//     <section className="section bg-primary">
//       <div className="container">
//         <div className="text-center ">
//           <h2 className="text-white">{markdownify(feature.title)}</h2>
//         </div>
//         <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
//           {feature.features.map((item, i) => (
//             <div
//               className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
//               key={`feature-${i}`}
//             >
//               {item.icon && (
//                 <Image
//                   className="mx-auto"
//                   src={item.icon}
//                   width={30}
//                   height={30}
//                   alt=""
//                 />
//               )}
//               <div className="mt-4">
//                 {markdownify(item.name, "h3", "h5")}
//                 <p className="mt-3">{item.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   return (
//     <>
//     <ContactHeader />
//     <section className="section">
//       <div className="container mx-auto">
//         {/* {markdownify(title, "h1", "text-center font-normal mb-8")} */}
//         {intro && intro_image && <IntroSection />}
//         {section_items && section_items.length > 0 && <CardSection />}
//       </div>
//     </section>
//     </>
//   );
// }

// export default About;

import React from "react";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import BgImage from "../public/images/11.jpg";
import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <div
      className="bg-cover bg-center text-center relative z-10 py-6 mt-12"
      style={{
        backgroundImage: "url('/images/naturebg.jpg')",
        marginTop: "100px",
        height: "250px",
      }}
    >
      <h1 className="text-7xl font-bold leading-tight text-primary absolute bottom-6 left-1/2 transform -translate-x-1/2">
        Services
      </h1>
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

  const NewSection = () => (
    <div className="relative w-full object-fill stretch-full">
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
          <h1 className="text-5xl font-bold leading-tight text-primary mb-12">
            Our Services
          </h1>
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
  // Card Section
  const CardSection = () => (
    <section className="section bg-primary">
      <div className="container">
        <div className="text-center">
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
          <NewSection />
          {section_items && section_items.length > 0 && <CardSection />}
        </div>
      </section>
    </>
  );
}

export default About;


