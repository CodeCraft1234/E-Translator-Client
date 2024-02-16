import axios from "axios";

const AxiosTest1=axios.create({
    baseURL:'http://localhost:5000'
})
const UseAxiosTest1 = () => {
    return AxiosTest1
};

export default UseAxiosTest1;