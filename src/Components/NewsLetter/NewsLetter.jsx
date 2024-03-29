import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleSubscribeClick = () => {
    if (email === "") {
      toast.error("Please enter a valid email address.", {});
      return;
    }
    const emailSent = true;
    if (emailSent) {
      toast.success("Thanks for subscribing to our newsletter", {});
    }
  };

  return (
    <div className="mt-10 mb-10">
      <section className="text-white py-12 rounded-2xl border">
        <div className="container mx-auto">
          <h2 className="lg:text-2xl md:text-2xl text-xl px-3 font-bold mb-4 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className=" mb-6 px-3 text-center">
            Stay updated with the latest news and updates. Join our newsletter
            today!
          </p>
          <div className="flex px-3 text-center justify-center">
            <input
              type="email"
              className="lg:w-full md:w-full w-[160px] text-black py-3 px-4 rounded-l-md focus:outline-none"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white py-3 px-4 rounded-r-md hover:bg-blue-600"
              type="submit"
              onClick={handleSubscribeClick}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
