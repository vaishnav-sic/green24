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



import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section bg-gradient-to-r text-white py-12">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
        {markdownify(title, "h1", "text-center font-semibold text-4xl text-orange-500 mb-8")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form space-y-4"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded p-3 border border-gray-300 placeholder-gray-500"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded p-3 border border-gray-300 placeholder-gray-500"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded p-3 border border-gray-300 placeholder-gray-500"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded p-3 border border-gray-300 placeholder-gray-500"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5 mt-8 md:mt-0">
            {markdownify(info.title, "h4", "text-2xl font-bold mb-4 text-gray-800")}
            {markdownify(info.description, "p", "mt-4 text-gray-700")}
            <ul className="contact-list mt-5 space-y-2">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-lg text-gray-800")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

