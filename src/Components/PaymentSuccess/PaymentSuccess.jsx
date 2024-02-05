import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const { tranId } = useParams();
    console.log(tranId);

    useEffect(() =>{
        const successToast = toast.success("Payment Success", {
            duration: 3000,
        });

        // clean the toast when components mount
        return () => toast.dismiss(successToast);
    }, [])
    

    return (
        <div className="mt-44">
         <h1 className="text-center font-bold text-2xl text-green-600">Payment Success: {tranId}</h1>
        </div>
    );
};

export default PaymentSuccess;