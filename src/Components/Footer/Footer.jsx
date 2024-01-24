import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPolicy from "./CookiesPolicy";
import TermsAndConditionsPage from "./TermsAndConditionsPage";



const Footer = () => {

  return (
    
    <div>
      <footer className="footer items-center p-4 bg-base-200 text-base-content  " >

        <aside style={{ width: '200px' }}>
          <img
            className=""
            src="https://i.ibb.co/vkM6Y5y/E-translator.png?fbclid=IwAR149GSYPRE0w5PwSwGI1GFQsTqojb9mry5T1EzLIQHhz9TjLGQPFepiy_k"
            alt=""
          />

        </aside>
        <nav>
          <header className="footer-title border-b-4 border-red-500">Services</header>
         
          
          <a className="link link-hover hover:translate-x-2">Design</a>
          <a className="link link-hover hover:translate-x-2">Marketing</a>
          <a className="link link-hover hover:translate-x-2">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title border-b-4 border-red-500">Company</header>
          <a className="link link-hover hover:translate-x-2">About us</a>
          <a className="link link-hover hover:translate-x-2">Contact</a>
          
          <a className="link link-hover hover:translate-x-2">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title border-b-4 border-red-500">Legal</header>
          <button className="hover:translate-x-2 link link-hover" onClick={() => document.getElementById('my_modal_1').showModal()}>Terms and Conditions</button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <TermsAndConditionsPage></TermsAndConditionsPage>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <button className="hover:translate-x-2 link link-hover" onClick={() => document.getElementById('my_modal_2').showModal()}>Privacy Policy</button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <PrivacyPolicy></PrivacyPolicy>
              <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <button className="hover:translate-x-2 link link-hover" onClick={() => document.getElementById('my_modal_3').showModal()}>Cookies Policy</button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <CookiesPolicy></CookiesPolicy>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </nav>
        <nav>
          <header className="footer-title border-b-4 border-red-500">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:scale-150"></FaTwitter>
            </a>
            <a rel="noopener noreferrer" href="https://youtube.com/" target="_blank" >
              <FaYoutube className="text-2xl hover:scale-150"></FaYoutube>
            </a>
            <a rel="noopener noreferrer" href="https://facebook.com/" target="_blank" >
              <FaFacebook className="text-2xl hover:scale-150"></FaFacebook>
            </a>
          </div>
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
