import axios from "axios";
const AxiosSecure=axios.create({

    baseURL:'http://localhost:5000'

    baseURL:'https://e-translator-server.vercel.app'

})
const UseAxiosSecure = () => {
    return AxiosSecure
};
export default UseAxiosSecure;