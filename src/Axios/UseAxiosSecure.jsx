import axios from "axios";

const AxiosSecure=axios.create({
    // baseURL:'https://e-translator-server.vercel.app'
    baseURL:'http://localhost:5000'
})
const UseAxiosSecure = () => {
    return AxiosSecure
};

export default UseAxiosSecure;