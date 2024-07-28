// import config from "@config/config.json";
// import { markdownify } from "@lib/utils/textConverter";

// const Contact = ({ data }) => {
//   const { frontmatter } = data;
//   const { title, info } = frontmatter;
//   const { contact_form_action } = config.params;

//   return (
//     <section className="section">
//       <div className="container">
//         {markdownify(title, "h1", "text-center font-normal")}
//         <div className="section row pb-0">
//           <div className="col-12 md:col-6 lg:col-7">
//             <form
//               className="contact-form"
//               method="POST"
//               action={contact_form_action}
//             >
//               <div className="mb-3">
//                 <input
//                   className="form-input w-full rounded"
//                   name="name"
//                   type="text"
//                   placeholder="Name"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   className="form-input w-full rounded"
//                   name="email"
//                   type="email"
//                   placeholder="Your email"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   className="form-input w-full rounded"
//                   name="subject"
//                   type="text"
//                   placeholder="Subject"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   className="form-textarea w-full rounded-md"
//                   rows="7"
//                   placeholder="Your message"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Send Now
//               </button>
//             </form>
//           </div>
//           <div className="content col-12 md:col-6 lg:col-5">
//             {markdownify(info.title, "h4")}
//             {markdownify(info.description, "p", "mt-4")}
//             <ul className="contact-list mt-5">
//               {info.contacts.map((contact, index) => (
//                 <li key={index}>
//                   {markdownify(contact, "strong", "text-dark")}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


//new component added
// import config from "@config/config.json";
// import { markdownify } from "@lib/utils/textConverter";
// // import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';


// { const Contact = ({ data }) => {
//   const { frontmatter } = data;
//   const { title, info } = frontmatter;
//   const { contact_form_action } = config.params;

//   const contactNumber = "+91 9921055678";
//   const email = "contact@example.com";
//   const whatsappQR = "/images/WhatsappQRSandip.png";
//   // const socialLinks = {
//   //   facebook: "https://facebook.com",
//   //   linkedin: "https://linkedin.com",
//   //   twitter: "https://twitter.com",
//   //   instagram: "https://instagram.com"
//   //};

//   // Map location URL
//   const mapLocation = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d942.8886478114555!2d73.01705898830159!3d19.03933885766353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAyJzIwLjEiTiA3M8KwMDEnMDIuNiJF!5e0!3m2!1sen!2sin!4v1721987928452!5m2!1sen!2sin";

//   return (
//     <section className="section">
//       <div className="container mx-auto p-8 rounded-lg">
//         <section className="contact-info-section p-8 rounded-lg mb-8">
//           <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="contact-item">
//               <h4 className="font-bold text-xl mb-2">Call</h4>
//               <p>{contactNumber}</p>
//             </div>
//             <div className="contact-item">
//               <h4 className="font-bold text-xl mb-2">Email ID</h4>
//               <p>{email}</p>
//             </div>
//             <div className="contact-item">
//               <h4 className="font-bold text-xl mb-2">WhatsApp</h4>
//               <img src={whatsappQR} alt="WhatsApp QR Code" className="w-32 h-32" />
//             </div>
//             {/* <div className="contact-item">
//               <h4 className="font-bold text-xl mb-2">Follow Us</h4> */}
//               {/* <div className="flex space-x-4">
//                 {socialLinks.facebook && <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook className="text-blue-600 text-2xl" /></a>}
//                 {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-blue-700 text-2xl" /></a>}
//                 {socialLinks.twitter && <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-500 text-2xl" /></a>}
//                 {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-600 text-2xl" /></a>}
//               </div> */}
//             {/* </div> */}
//           </div>
//         </section>

//         {markdownify(title, "h1", "text-center font-bold text-4xl mb-8")}
//         <div className="section row pb-0">
//           <div className="content col-12 md:col-6 lg:col-5 mt-8 md:mt-0">
//             {markdownify(info.title, "h4", "text-2xl font-bold mb-4 text-gray-800")}
//             {markdownify(info.description, "p", "mt-4 text-gray-700")}
//             <ul className="contact-list mt-5 space-y-2">
//               {info.contacts.map((contact, index) => (
//                 <li key={index}>
//                   {markdownify(contact, "strong", "text-lg text-gray-800")}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Map Location */}
//           <div className="map-container col-12 md:col-6 lg:col-7 mt-8">
//             <h4 className="font-bold text-xl mb-2">Our Location</h4>
//             <iframe 
//               src={mapLocation}
//               width="100%"
//               height="400"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Map Location"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import config from "@config/config.json";
// import { markdownify } from "@lib/utils/textConverter";

// const Contact = ({ data }) => {
//   const { frontmatter } = data;
//   const { title, info } = frontmatter;
//   const { contact_form_action } = config.params;

//   const contactNumber = "+91 9921055678";
//   const email = "contact@example.com";
//   const whatsappQR = "/images/WhatsappQRSandip.png";
//   const mapLocation = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d942.8886478114555!2d73.01705898830159!3d19.03933885766353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAyJzIwLjEiTiA3M8KwMDEnMDIuNiJF!5e0!3m2!1sen!2sin!4v1721987928452!5m2!1sen!2sin";

//   return (
//     <section className="section">
//       <div className="container mx-auto p-8 rounded-lg text-center">
//         <section className="contact-info-section p-8 rounded-lg mb-8">
//           <div className="container mx-auto flex flex-col md:flex-row justify-around items-center w-full">
//             <div className="contact-item mb-8 md:mb-0">
//               <h4 className="font-bold text-xl mb-2">Call</h4>
//               <p>{contactNumber}</p>
//             </div>
//             <div className="contact-item mb-8 md:mb-0">
//               <h4 className="font-bold text-xl mb-2">Email ID</h4>
//               <p>{email}</p>
//             </div>
//             <div className="contact-item">
//               <h4 className="font-bold text-xl mb-2">WhatsApp</h4>
//               <img src={whatsappQR} alt="WhatsApp QR Code" className="w-32 h-32 mx-auto" />
//             </div>
//           </div>
//         </section>

//         {markdownify(title, "h1", "text-center font-bold text-4xl mb-8")}
//         <div className="section grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="content flex flex-col justify-start items-start">
//             {markdownify(info.title, "h4", "text-2xl font-bold mb-4 text-gray-800 text-left")}
//             {markdownify(info.description, "p", "mt-4 text-gray-700 text-left")}
//             <ul className="contact-list mt-5 space-y-2">
//               {info.contacts.map((contact, index) => (
//                 <li key={index}>
//                   {markdownify(contact, "strong", "text-l text-gray-800 text-left")}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="map-container flex justify-center items-center">
//             <div className="w-full">
//               <h4 className="font-bold text-xl mb-2 text-center">Our Location</h4>
//               <iframe 
//                 src={mapLocation}
//                 width="100%"
//                 height="400"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Map Location"
//                 className="mb-5" // Adjust this class as needed
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  const contactNumber = "+91 9921055678";
  const email = "info@green24.in";
  const whatsappQR = "/images/WhatsappQRSandip.png";
  const mapLocation = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d942.8886478114555!2d73.01705898830159!3d19.03933885766353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAyJzIwLjEiTiA3M8KwMDEnMDIuNiJF!5e0!3m2!1sen!2sin!4v1721987928452!5m2!1sen!2sin";

  return (
    <section className="section w-full px-4">
      <div className="w-full px-4 py-8">
        <section className="contact-info-section w-full px-4 py-8 rounded-lg mb-8 border border-gray-300 shadow-xl">
          <div className="flex flex-col md:flex-row justify-around items-center text-center w-full">
            <div className="contact-item mb-8 md:mb-0">
              <h4 className="font-bold text-xl mb-2">Call</h4>
              <p>{contactNumber}</p>
            </div>
            <div className="contact-item mb-8 md:mb-0 md:mx-4">
              <h4 className="font-bold text-xl mb-2">Email ID</h4>
              <p>{email}</p>
            </div>
            <div className="contact-item">
              <h4 className="font-bold text-xl mb-2">WhatsApp</h4>
              <img src={whatsappQR} alt="WhatsApp QR Code" className="w-32 h-32 mx-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        {markdownify(title, "h1", "text-center font-bold text-4xl mb-8")}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="content flex flex-col justify-start items-start p-4 bg-theme-light border border-gray-300 rounded-lg shadow-2xl w-full">
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

          <div className="map-container flex justify-center items-center p-4 bg-theme-light border border-gray-300 rounded-lg shadow-2xl w-full">
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
    </section>
  );
};

export default Contact;
