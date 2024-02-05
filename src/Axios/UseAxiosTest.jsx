import axios from "axios";

const AxiosTest=axios.create({
    baseURL:'http://localhost:5000'
})
const UseAxiosTest = () => {
    return AxiosTest
};

export default UseAxiosTest;