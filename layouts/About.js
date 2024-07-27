import React from "react";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import BgImage from "../public/images/11.jpg";
import GalleryImage1 from "../public/images/gallery1.jpg";
import GalleryImage2 from "../public/images/gallery2.jpg";
import GalleryImage3 from "../public/images/gallery3.jpg";
import GalleryImage4 from "../public/images/gallery4.jpg";
import GalleryImage5 from "../public/images/gallery5.jpg";
import GalleryImage6 from "../public/images/gallery6.jpg";
import GalleryImage7 from "../public/images/gallery7.jpg";
import GalleryImage8 from "../public/images/gallery8.jpg";
import GalleryImage9 from "../public/images/gallery9.jpg";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, intro, intro_image, section_items } = frontmatter;

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
    <section className="body-font bg-theme-white border-t border-gray-200 text-gray-700">
      <div className="container mx-auto bg-theme-light px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          {section_items.map((item, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8 shadow-lg">
                <div className="mb-3 flex items-center justify-center">
                  {markdownify(
                    item.title,
                    "h2",
                    "text-gray-900 text-xl title-font font-bold text-center text-indigo-600"
                  )}
                </div>
                <div className="flex-grow">
                  {markdownify(
                    item.description,
                    "p",
                    "leading-relaxed text-base"
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Gallery Section
  const GallerySection = () => {
    const images = [
      GalleryImage1,
      GalleryImage2,
      GalleryImage3,
      GalleryImage4,
      GalleryImage5,
      GalleryImage6,
      GalleryImage7,
      GalleryImage8,
      GalleryImage9,
    ];

    return (
      <section>
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-indigo-500">
              OUR GALLERY
            </h2>
            <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
              Check out our work
            </h1>
          </div>
          <div className="-m-1 flex flex-wrap md:-m-2">
            {images.map((image, index) => (
              <div key={index} className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <div className="gallery-img-wrapper">
                    <Image
                      alt="gallery"
                      src={image}
                      layout="fill"
                      objectFit="cover"
                      className="gallery-img"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .gallery-img-wrapper {
            position: relative;
            width: 100%;
            padding-bottom: 75%; /* Adjust this to get the desired aspect ratio */
            overflow: hidden;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .gallery-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </section>
    );
  };

  return (
    <section className="section">
      <div className="container mx-auto">
        {markdownify(title, "h1", "text-center font-normal mb-8")}
        {intro && intro_image && <IntroSection />}
        {section_items && section_items.length > 0 && <CardSection />}
        <GallerySection />
      </div>
    </section>
  );
}

export default Faq;
