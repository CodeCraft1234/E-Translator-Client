const ContactUs = () => {
  return (
    <div className="bg-base-200 mt-16 rounded-md">
      <div className="grid max-w-screen-xl mt-10 grid-cols-1  gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between mt-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              {` Let's talk!`}
            </h2>
            <div className="dark:text-gray-400">
              We are happy to response you.
            </div>
          </div>
          <img
            src="assets/svg/doodle.svg"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-base font-semibold">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded-lg dark:bg-gray-800 border-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-base font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-lg dark:bg-gray-800 border-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-base font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded-lg dark:bg-gray-800 border-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-outline border-0 border-[#d926a9] hover:bg-[#d926a9] hover:border-[#d926a9] border-b-4 hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
