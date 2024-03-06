import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { useRef } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPolicy from "./CookiesPolicy";
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import { Link } from "react-router-dom";

const Footer = () => {
  const modalContentRef1 = useRef(null);
  const modalContentRef2 = useRef(null);
  const modalContentRef3 = useRef(null);
  const showModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef1.current) {
      modalContentRef1.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const newShowModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef2.current) {
      modalContentRef2.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const newNewShowModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef3.current) {
      modalContentRef3.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="footer items-center  p-4 text-white border-t  ">
        <aside style={{ width: "200px" }}>
          <img
            className=""
            src="https://i.ibb.co/vkM6Y5y/E-translator.png?fbclid=IwAR149GSYPRE0w5PwSwGI1GFQsTqojb9mry5T1EzLIQHhz9TjLGQPFepiy_k"
            alt=""
          />
        </aside>
        <nav>
          <header className="footer-title border-b-4 border-[#006bcb]">
            Services
          </header>

          <Link
            to={"/translate"}
            className="link link-hover hover:translate-x-2"
          >
            Translate
          </Link>
          <Link to={"/contact"} className="link link-hover hover:translate-x-2">
            Contact
          </Link>
          <Link
            to={"/features"}
            className="link link-hover hover:translate-x-2"
          >
            Features
          </Link>
        </nav>
        <nav>
          <header className="footer-title border-b-4 border-[#006bcb]">
            Company
          </header>
          <Link to="/getintuch" className="link link-hover hover:translate-x-2">
            Get In Touch
          </Link>
          {/* <link className="link link-hover hover:translate-x-2">Contact</link> */}
          <Link to="/aboutUs">
            <button
              className="font-avenir mr-10  rounded link link-hover hover:translate-x-2"
              onClick={scrollToTop()}
            >
              About us
            </button>
          </Link>
          <Link to="/meetTeam">
            <button className="font-avenir mr-10  rounded link link-hover hover:translate-x-2">
              Meet Our Team
            </button>
          </Link>
        </nav>
        <nav>
          <header className="footer-title border-b-4 border-[#006bcb]">
            Legal
          </header>
          <button
            className="hover:translate-x-2 link link-hover"
            onClick={showModalAndScrollToTop}
          >
            Terms and Conditions
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box" ref={modalContentRef1}>
              <TermsAndConditionsPage></TermsAndConditionsPage>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          <button
            className="hover:translate-x-2 link link-hover"
            onClick={newShowModalAndScrollToTop}
          >
            Privacy Policy
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box" ref={modalContentRef2}>
              <PrivacyPolicy></PrivacyPolicy>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          <button
            className="hover:translate-x-2 link link-hover"
            onClick={newNewShowModalAndScrollToTop}
          >
            Cookies Policy
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box" ref={modalContentRef3}>
              <CookiesPolicy></CookiesPolicy>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </nav>
        <nav>
          <header className="footer-title border-b-4 border-[#006bcb]">
            Social
          </header>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:scale-150"></FaTwitter>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://youtube.com/"
              target="_blank"
            >
              <FaYoutube className="text-2xl hover:scale-150"></FaYoutube>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://facebook.com/"
              target="_blank"
            >
              <FaFacebook className="text-2xl hover:scale-150"></FaFacebook>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 mt-5 text-white ">
        <aside>
          <p>Copyright © 2024 - All right reserved by E Translator </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
