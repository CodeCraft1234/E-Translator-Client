// const ContactUs = () => {
//   return (
//     <div className="bg-base-300 mt-16 rounded-md lg:px-12 md:px-10 px-5">
//       <div className="grid max-w-screen-xl mt-10 grid-cols-1  gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
//         <div className="flex flex-col justify-between mt-10">
//           <div className="space-y-2">
//             <h2 className="text-4xl font-bold leadi lg:text-5xl">
//               {` Let's talk!`}
//             </h2>
//             <div className="dark:text-gray-400">
//               We are happy to response you.
//             </div>
//           </div>
//           <img
//             src="assets/svg/doodle.svg"
//             alt=""
//             className="p-6 h-52 md:h-64"
//           />
//         </div>
//         <form noValidate="" className="space-y-6">
//           <div>
//             <label htmlFor="name" className="text-base font-semibold">
//               Full name
//             </label>
//             <input
//               id="name"
//               type="text"
//               placeholder=""
//               className="w-full p-3 rounded-lg dark:bg-gray-800 border-2"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="text-base font-semibold">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               className="w-full p-3 rounded-lg dark:bg-gray-800 border-2"
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="text-base font-semibold">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows="3"
//               className="w-full p-3 rounded-lg dark:bg-gray-800 border-2"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="btn btn-outline border-0 border-[#d926a9] hover:bg-[#d926a9] hover:border-[#d926a9] border-b-4 hover:text-white"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import { FaAddressCard, FaElementor, FaPhoneAlt } from "react-icons/fa";


import { useContext, useRef } from "react";
import Swal from "sweetalert2";




const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

   
    sendForm(
      "service_g5ha8mg",
      "template_ij26ndo",
      form.current,
      "SogIvAfyT0dGPoT_4"
    )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            title: 'success!',
            text: 'Email Send Successfully !!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          form.reset()
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      );
  };

  return (
    <div className="my-20 px-5 md:px-0" id="contact">
      <h1 className="text-5xl font-bold text-center  mb-10">
        Contact <span className="text-accent">Me</span>
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="md:w-3/12">
          <p className="flex items-center gap-2 my-3">
            <span className="text-accent text-2xl">
              <FaAddressCard />
            </span>{" "}
            <span className="text-xl">Address: </span>{" "}
            <span className="text-gray-400">Mirpur-10, Dhaka</span>
          </p>
          <p className="flex items-center gap-2 my-3">
            <span className="text-accent text-2xl">
              <FaElementor />
            </span>{" "}
            <span className="text-xl">Email: </span>{" "}
            <span className="text-gray-400">{}</span>
          </p>
          <p className="flex items-center gap-2 my-3">
            <span className="text-accent text-2xl">
              <FaPhoneAlt />
            </span>{" "}
            <span className="text-xl">Phone: </span>{" "}
            <span className="text-gray-400"> +880 1628000xxxxxxx</span>
          </p>
        </div>
        <div className="md:w-3/6">
          <form ref={form} onSubmit={sendEmail}>
            <div className=" md:flex gap-6">
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="your name"
                  name="name"
                  className="input border-2 border-gray-700 w-full "
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-6 mt-6">
              <div className="form-control w-full ">
                <input
                  type="email"
                  placeholder="your email"
                  name="user_email"
                  className="input  w-full border-2 border-gray-700 "
                  required
                />
              </div>
            </div>
            <textarea
              name="message"
              className="textarea textarea-ghost w-full mt-6 border-2 border-gray-700"
              placeholder="message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-outline border-0 border-[#d926a9]  hover:bg-[#d926a9] hover:border-[#d926a9] border-b-4 hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;