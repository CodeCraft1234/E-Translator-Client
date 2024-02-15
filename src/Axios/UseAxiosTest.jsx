import axios from "axios";

const AxiosTest=axios.create({
    baseURL:'https://e-translator-server.vercel.app'
})
const UseAxiosTest = () => {
    return AxiosTest
};

export default UseAxiosTest;