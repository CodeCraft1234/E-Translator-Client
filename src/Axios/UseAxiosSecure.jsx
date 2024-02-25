import axios from "axios";

const AxiosSecure=axios.create({
    baseURL:'https://e-translator-server.vercel.app'
   
})
const UseAxiosSecure = () => {
    return AxiosSecure
};

export default UseAxiosSecure;