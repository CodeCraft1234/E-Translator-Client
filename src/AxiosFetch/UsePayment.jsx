
import UseAxiosSecure from '../Axios/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UsePayment = () => {
    const AxiosSecure=UseAxiosSecure()
    const { refetch, data: payment=[]}=useQuery({
        queryKey:['payment'],
        queryFn: async () => {
            const res=await AxiosSecure.get("/payment")
            return res.data
        }
    })
        console.log(payment)
        return [payment,refetch]
}


export default UsePayment;