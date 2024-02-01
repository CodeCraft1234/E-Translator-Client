import { useParams } from "react-router-dom";


const PaymentFail = () => {
    const {tranId} = useParams();
    console.log(tranId);

    return (
        <div>
            <h1 className="text-center text-red-600">Payment Fail: {tranId}</h1>
        </div>
    );
};

export default PaymentFail;