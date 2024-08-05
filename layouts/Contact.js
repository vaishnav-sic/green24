import React from 'react';
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const ContactHeader = () => {
  return (
    <div className="bg-cover bg-center text-center  relative z-10 py-6 mt-12" style={{ backgroundImage: "url('/images/naturebg.jpg')", marginTop: '100px', height: '250px' }}>
      <h1 className="text-5xl font-bold leading-tight text-primary absolute bottom-6 left-1/2 transform -translate-x-1/2">Contact Us</h1>
    </div>
  );
};

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  const contactNumber = "+91 9921055678";
  const email = "info@green24.in";
  const whatsappQR = "/images/WhatsappQRSandip.png";
  const mapLocation = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d942.8886478114555!2d73.01705898830159!3d19.03933885766353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAyJzIwLjEiTiA3M8KwMDEnMDIuNiJF!5e0!3m2!1sen!2sin!4v1721987928452!5m2!1sen!2sin";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ContactHeader />
      <section className="w-full px-12 pt-3">
        <div className="w-full px-12 py-8">
          <section className="relative w-full px-4 py-4 mb-8 border border-gray-300 shadow-xl bg-green-600 rounded-lg text-white">
            <div className="flex flex-col md:flex-row justify-around items-center text-center">
              <div className="mb-4 md:mb-0 flex flex-col items-center">
                <p className="text-2xl font-bold mb-1">Call</p>
                <svg className="text-white w-8 h-8 mb-2" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.53.57 1 1 0 011 1v3.64a1 1 0 01-1 1A18 18 0 013 6a1 1 0 011-1h3.63a1 1 0 011 1 11.36 11.36 0 00.58 3.53 1 1 0 01-.28 1.11z" />
                </svg>
                <p className="text-2xl">{contactNumber}</p>
              </div>
              <div className="mb-4 md:mb-0 md:mx-4 flex flex-col items-center">
                <p className="text-2xl font-bold mb-1">Email</p>
                <div className="text-4xl mb-2 text-white" >✉️</div> {/* Email icon */}
                <p className="text-2xl">{email}</p>
              </div>
              <div className="flex flex-col items-center">
               <p className="text-2xl font-bold mb-1">WhatsApp</p>
                <img src={whatsappQR} alt="WhatsApp QR Code" className="w-32 h-32 mx-auto rounded-lg shadow-xl " />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col justify-start items-start p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-2xl">
              {markdownify(info.title, "h4", "text-2xl font-bold mb-4 text-gray-800 text-left")}
              {markdownify(info.description, "p", "mt-4 text-gray-700 text-left")}
              <ul className="contact-list mt-5 space-y-2 list-none pl-0">
                {info.contacts.map((contact, index) => (
                  <li key={index} className="text-lg text-gray-800 text-left">
                    {markdownify(contact, "strong")}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center items-center p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-2xl">
              <div className="w-full">
                <h4 className="font-bold text-2xl mb-4 text-center">Our Location</h4>
                <iframe 
                  src={mapLocation}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map Location"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="fixed bottom-5 right-5 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-green-700 focus:outline-none" onClick={scrollToTop}>
          🪴
        </button>
      </section>
    </>
  );
};

export default Contact;
























