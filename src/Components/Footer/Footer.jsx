import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-base-300 text-base-content  ">
        <aside className="flex items-center">
          <img
            className="w-1/6"
            src="https://i.ibb.co/vkM6Y5y/E-translator.png?fbclid=IwAR149GSYPRE0w5PwSwGI1GFQsTqojb9mry5T1EzLIQHhz9TjLGQPFepiy_k"
            alt=""
          />
          <p className="ml-4">
            <span className="mr-6">Privacy Policy</span> Terms and Conditions
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://twitter.com/" target="_blank">
            <FaTwitter className="text-2xl"></FaTwitter>
          </a>
          <a href="https://youtube.com/" target="_blank">
            <a>
              <FaYoutube className="text-2xl"></FaYoutube>
            </a>
          </a>
          <a href="https://facebook.com/" target="_blank">
            <FaFacebook className="text-2xl"></FaFacebook>
          </a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by E Translator </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
