import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider"
import UseAxiosPublic from '../../Axios/UseAxiosPublic';
import toast from "react-hot-toast";

// import UseAxiosTest from '../../Axios/UseAxiosTest';


const Feedback = () => {
    const AxiosPublic = UseAxiosPublic();
    // const AxiosTest = UseAxiosTest();
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedValue = e.target.options.value;
        const feedbackInfo = { name:user.displayName, feedback:selectedValue};
        console.log(feedbackInfo);
        e.target.options.value='';
        AxiosPublic.post("/feedback", feedbackInfo)
        // AxiosTest.post("/feedback", feedbackInfo)
        .then((res) => {
            console.log(res.data);
            if(res.data.acknowledged){
                return toast.success("feedback submitted successfully");
            }
        })
        // new product created for server side here


        .catch((error) => {
            console.log(error);
            return toast.error("user doesn't exist");
        });
    };

    return (
        <div>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="flex items-center">
                      
                        <textarea className="textarea textarea-primary w-full" placeholder="Give Your Feedback" name="options"></textarea>
                    </div>
                </div>
               
                <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Feedback;
