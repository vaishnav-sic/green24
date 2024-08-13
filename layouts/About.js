import React from "react";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import BgImage from "../public/images/11.jpg";
import ArticleImage from "../public/images/article2.jpg"; // Add this line to import the image
import AdditionalImage from "../public/images/art3.png"; // Add this line to import the image

const ContactHeader = () => {
  return (
    <div className="bg-cover bg-center text-center  relative z-10 py-6 mt-12" style={{ backgroundImage: "url('/images/naturebg.jpg')", marginTop: '100px', height: '250px' }}>
      <h1 className="text-5xl font-bold leading-tight text-primary absolute bottom-6 left-1/2 transform -translate-x-1/2">About Us</h1>
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

  return (
    <>
      <ContactHeader />
      <section className="section">
        <div className="container mx-auto">
          {/* {markdownify(title, "h1", "text-center font-normal mb-8")} */}
          {intro && intro_image && <IntroSection />}
          {section_items && section_items.length > 0 && <CardSection />}
          <div className="mt-12 flex items-center">
            <div className="w-full px-4 md:w-1/3">
              <div className="flex flex-col space-y-4">
                <Image
                  src={ArticleImage} // The first image to be displayed near the article
                  alt="Article"
                  width={400} // Set the desired width
                  height={100} // Set the desired height
                  className="w-full rounded-lg shadow-md"
                />
                <Image
                  src={AdditionalImage} // The second image to be displayed near the article
                  alt="Additional"
                  width={400} // Set the desired width
                  height={100} // Set the desired height
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-4 text-lg text-gray-600 md:w-2/3">
              {/* Marathi अग्रलेख */}
                            <div className="space-y-6"> {/* Add this div to control the spacing */}

              <p>
                ग्रीन24, आम्ही तुमच्या बाह्य जागांना समृद्ध, जीवनसत्त्वांनी
                परिपूर्ण बागांमध्ये रूपांतर करण्यासाठी समर्पित आहोत. बागायती आणि
                लँडस्केप डिझाइनमध्ये वर्षानुवर्षे तज्ञतेसह, आमचे समर्पित बागकाम
                व्यावसायिकांचे संघ तुमच्या अनन्य गरजांची पूर्तता करण्यासाठी
                उत्कृष्ट सेवा प्रदान करण्यात कटिबद्ध आहे. नियमित देखभाल आणि
                हंगामी लागवडीपासून ते पूर्ण बागेच्या रूपांतरणापर्यंत, आम्ही
                टिकाऊ पद्धती आणि उच्च-गुणवत्तेच्या साहित्याचा वापर करतो जेणेकरून
                तुमची बाग वर्षभर बहरते. ग्रीन24 मध्ये सामील व्हा आणि आम्हाला
                तुमची सुंदर, टिकाऊ बाग तयार करण्यात मदत करा ज्याचा तुम्ही आनंद
                घेऊ शकता आणि अभिमान बाळगू शकता. नमस्कार मी डॉ.संदिप शिंदे (
                Agriculturist- Gardening Specialist ) शेतकरी कुटुंबातील असल्याने
                लहानपणापासून शेती, झाडें, भाजीपाला, फळबागायत याबाबत खूप आवड आहे.
                कृषी संदर्भातील शिक्षण पूर्ण झाल्यानंतर शेती सोबत गार्डनिंग चे
                सुद्धा काम करत आहे.. गार्डनिंग व्यवसायात मला जवळपास 10 वर्षांचा
                अनुभव आहे.. हा व्यवसाय करण्यामगे फक्त पैसे कमवणे हा उद्देश नसून,
                हा व्यवसाय मी आवड म्हणून करत आहे.. शाळा, कॉलेज, फार्म हाऊस,
                हॉटेल्स, इत्यादी च्या गार्डन चे काम केले आहे. त्याचबरोबर अनेक
                शेतकऱ्यांना फळबागयात संदर्भात मार्गदर्शन सुद्धा करतो आहे..
                माझ्याकडे शिक्षणासोबत अनुभवाची सुद्धा जोड आहे..उत्कृष्ट काम
                केल्यामुळे कर्मवीर भाऊराव पाटील कॉलेज यांनी सन्मानचिन्ह देऊन मला
                सन्मानित केले आहे.. व्यवसाय करत असताना पैशा सोबत गार्डन मध्ये
                काम करण्याचा सुद्धा आनंद मिळतो... <br />I am Dr. Sandip Shinde,
                an experienced Agriculturist and Gardening Specialist with a
                deep-rooted passion for agriculture and horticulture. Growing up
                in a family of farmers, my lifelong fascination with plants,
                trees, vegetables, and orchards has been a driving force behind
                my career. With a decade of hands-on experience in the gardening
                business, I offer a unique blend of academic knowledge and
                practical expertise. My educational background in agriculture
                complements my extensive experience in both personal and
                professional gardening. This dual advantage allows me to provide
                exceptional guidance and innovative solutions in various
                gardening projects. Throughout my career, I have successfully
                managed and transformed gardens for diverse settings, including
                schools, colleges, farmhouses, and hotels. Additionally, I offer
                expert consultancy to farmers, particularly in the realm of
                fruit orchards, helping them enhance their yields and optimize
                their farming practices. My commitment to gardening goes beyond
                mere financial gain; it is a cherished hobby and a true passion.
                This genuine dedication drives me to deliver excellence in every
                project, ensuring not only aesthetic appeal but also functional
                and sustainable gardening solutions. Whether you're looking to
                create a stunning garden, improve existing green spaces, or seek
                expert advice on orchard management, I am here to provide
                tailored solutions that meet your needs and exceed your
                expectations.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
