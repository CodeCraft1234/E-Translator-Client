import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";


const PaymentFail = () => {
    const {tranId} = useParams();
    console.log(tranId);
    
    useEffect(() =>{
        const failToast = toast.error("Payment Fail", {
            duration: 3000,
        });

        // clean the toast when components mount
        return () => toast.dismiss(failToast);
    }, [])

    return (
        <div className="mt-44">
            <h1 className="text-center text-4xl font-bold text-red-600">Payment Fail</h1>
        </div>
    );
};

export default PaymentFail;