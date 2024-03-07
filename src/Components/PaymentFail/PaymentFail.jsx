import { useEffect } from "react";
import toast from "react-hot-toast";

import { useParams } from "react-router-dom";

import "./PaymentFail.css";

const PaymentFail = () => {
  const { tranId } = useParams();
  console.log(tranId);

  useEffect(() => {
    const failToast = toast.error("24$ Pay Fail", {
      duration: 3000,
    });

    // clean the toast when components mount
    return () => toast.dismiss(failToast);
  }, []);

  return (
    <div className="mt-24">
      <div className="min-h-screen flex items-center justify-center">
        <div className="container printer2 mx-auto">
          <div className="printer-top"></div>

          <div className="paper-container">
            <div className="printer-bottom"></div>

            <div className="paper">
              <div className="main-contents">
                <div className="fail-icon">&#10005;</div>
                <div className="success-title">Payment Failed</div>
                <div className="success-description">
                  Your payment for Our Package has been failed.
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

export default PaymentFail;
