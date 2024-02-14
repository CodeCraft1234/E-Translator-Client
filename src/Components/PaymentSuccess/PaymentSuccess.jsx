import { useEffect } from "react";
import toast from "react-hot-toast";

import { useParams, useNavigate } from "react-router-dom";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  const { tranId } = useParams();console.log(tranId);
  const navigate = useNavigate();
  console.log(tranId);

  useEffect(() => {
    const successToast = toast.success("24$ Pay Successful", {
      duration: 3000,
    });

    // after payment redirects to translate page
    const redirectTimer = setTimeout(() => {
      navigate("/translate");
    }, 4500);

    // clean the toast when components mount

    return () => {
      clearTimeout(redirectTimer);
      toast.dismiss(successToast);
    };
  }, [navigate]);

  return (
    <div className="mt-44">
      <div className="min-h-screen flex items-center justify-center">
        <div className="container printer2 mx-auto">
          <div className="printer-top"></div>

          <div className="paper-container">
            <div className="printer-bottom"></div>

            <div className="paper">
              <div className="main-contents">
                <div className="success-icon">&#10003;</div>
                <div className="success-title">Payment Complete</div>
                <div className="success-description">
                  Your payment for Our Package has been received and sent to
                  ETranslator.
                </div>
                <div className="order-details">
                  <div className="order-number-label">Transaction id</div>
                  <div className="order-number">{tranId}</div>
                </div>
              </div>
              <div className="jagged-edge"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
