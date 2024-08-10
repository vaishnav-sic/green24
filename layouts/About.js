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
import ArticleImage from "../public/images/article1.jpg"; // Add this line to import the image

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
    <section className="section mx-0 w-full bg-theme-light bg-cover">
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
        <div className="mt-12 flex items-center">
          <div className="w-full px-4 md:w-1/2">
            <Image
              src={ArticleImage} // The image to be displayed near the article
              alt="Article"
              width={500} // Set the desired width
              height={500} // Set the desired height
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full px-4 text-lg text-gray-600 md:w-1/2">
            {/* Marathi अग्रलेख */}
            <p>
              ग्रीन24, आम्ही तुमच्या बाह्य जागांना समृद्ध, जीवनसत्त्वांनी
              परिपूर्ण बागांमध्ये रूपांतर करण्यासाठी समर्पित आहोत. बागायती आणि
              लँडस्केप डिझाइनमध्ये वर्षानुवर्षे तज्ञतेसह, आमचे समर्पित बागकाम
              व्यावसायिकांचे संघ तुमच्या अनन्य गरजांची पूर्तता करण्यासाठी
              उत्कृष्ट सेवा प्रदान करण्यात कटिबद्ध आहे. नियमित देखभाल आणि हंगामी
              लागवडीपासून ते पूर्ण बागेच्या रूपांतरणापर्यंत, आम्ही टिकाऊ पद्धती
              आणि उच्च-गुणवत्तेच्या साहित्याचा वापर करतो जेणेकरून तुमची बाग
              वर्षभर बहरते. ग्रीन24 मध्ये सामील व्हा आणि आम्हाला तुमची सुंदर,
              टिकाऊ बाग तयार करण्यात मदत करा ज्याचा तुम्ही आनंद घेऊ शकता आणि
              अभिमान बाळगू शकता.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
