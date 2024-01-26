import { FaAddressCard, FaElementor, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Security/AuthProvider";

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
            <span className="text-gray-400">{user?.email}</span>
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
                  className="input w-full border-2 border-gray-700"
                  required
                />
              </div>
            </div>
            <textarea
              name="message"
              className="textarea textarea-ghost w-full mt-6 border-2 border-gray-700"
              placeholder="Message"
              required
            ></textarea>
            <input
              type="submit"
              className="btn  btn-outline border-0 border-[#d926a9] hover:bg-[#d926a9] hover:border-[#d926a9] border-b-4 hover:text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
