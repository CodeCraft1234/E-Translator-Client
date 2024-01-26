import axios from "axios";


const AxiosPublic=axios.create({
    baseURL:'http://localhost:5000'
})
const AxiosPublic = () => {
    return AxiosPublic
};

export default AxiosPublic;