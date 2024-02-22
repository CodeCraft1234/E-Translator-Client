import axios from "axios";


const AxiosPublic=axios.create({
    baseURL:'https://e-translator-server.vercel.app'
 
})
const UseAxiosPublic = () => {
    return AxiosPublic
};

export default UseAxiosPublic;