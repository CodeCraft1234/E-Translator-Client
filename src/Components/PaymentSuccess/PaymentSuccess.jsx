import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const {tranId} = useParams();
    console.log(tranId);
    

    return (
        <div className="mt-44">
         <h1 className="text-center text-green-600">Payment Success: {tranId}</h1>
        </div>
    );
};

export default PaymentSuccess;