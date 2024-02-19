import { FaAddressCard, FaElementor, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Security/AuthProvider";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();
  const { user } = useContext(AuthContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
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
            title: "Success!",
            text: "Email sent successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Failed to send email. Do you want to continue?",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      );
  };

  return (

    <div className="mt-10 px-5  py-20 bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] text-white md:px-0" id="contact">
  <Helmet>

        <title> E-Translator | Contact</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="text-5xl font-bold text-center mb-10">
        Contact <span className="text-[#4392d9]">Us</span>
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="md:w-3/12">
          <p className="flex items-center gap-2 my-3">
            <span className="text-[#4392d9] text-2xl">
              <FaAddressCard />
            </span>{" "}
            <span className="text-xl">Address: </span>{" "}
            <span className="text-gray-400">Mirpur-10, Dhaka</span>
          </p>
          <p className="flex items-center gap-2 my-3">
            <span className="text-[#4392d9] text-2xl">
              <FaElementor />
            </span>{" "}
            <span className="text-xl">Email: </span>{" "}
            <span className="text-gray-400">{user?.email}</span>
          </p>
          <p className="flex items-center gap-2 my-3">
            <span className="text-[#4392d9] text-2xl">
              <FaPhoneAlt />
            </span>{" "}
            <span className="text-xl">Phone: </span>{" "}
            <span className="text-gray-400"> +880 1628000xxxxxxx</span>
          </p>
        </div>
        <div className="md:w-3/6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="md:flex gap-6">
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input border-2 border-gray-700 w-full"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-6 mt-6">
              <div className="form-control w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  name="user_email"
                  className="input w-full  border-2 border-gray-700"
                  required
                />
              </div>
            </div>
            <textarea
              name="message"
              className="textarea   w-full mt-6 border-2 border-gray-700"
              placeholder="Message"
              required
            ></textarea>
            <button className="bg-indigo-950 mt-4 border-b-2 rounded-lg">
              <a className="b">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
