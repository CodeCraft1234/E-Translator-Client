
import UsePayment from "../../AxiosFetch/UsePayment";



const Payinfo = () => {
    const [payment] = UsePayment()
    return (
        <div>
            <h2 className='text-3xl text-center my-5'>Users payment History</h2>
            <div className="overflow-x-auto mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Transaction id</th>
                            <th>_id</th>
                            <th>Product </th>
                            <th>Paidstatus </th>



                        </tr>
                    </thead>
                    <tbody>
                        {payment.map((payment, index) =>
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.tranjectionId}</td>
                                <td>{payment._id}</td>
                                <td>{payment.product}</td>
                                <td>{payment.paidStatus }</td>
                            </tr>)}


                    </tbody>
                </table>
            </div>
            {/* <Toaster /> */}
        </div>
    );
};

export default Payinfo;