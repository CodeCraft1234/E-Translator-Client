import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import UseAxiosPublic from "../Axios/UseAxiosPublic";
import { useForm } from "react-hook-form";

const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const { createUser, updateProfiles } = useContext(AuthContext);
  const navigate = useNavigate();
  const AxiosPublic = UseAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.image)
    // access the form data
    const image = { image: data.image[0] };
    const res = await AxiosPublic.post(image_hosting_api, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = res.data.data.display_url;
    console.log(res.data.data.display_url);
    console.log(name, email, password, photo);

    // create user and update profiles
    createUser(email, password)
      .then((result) => {
        updateProfiles(name, photo);
        console.log(result.user);
        console.log(email, name, photo);
        //post userinfo in database
        const date = new Date();
        const userInfo = { email, name, photo, date, admin: false };
        console.log(date);

        AxiosPublic.post("/users", userInfo)
        .then((res) => {
          console.log(res.data);
        });
        // new product created for server side here
        navigate("/");
        return toast.success("user created successfully");
      })
      .catch((error) => {
        console.log(error);
        return toast.error("user already exists");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <h1 className="text-2xl  text-center font-semibold">
                  Register your account
                </h1>
                <hr className="mt-4" />
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-sm font-semibold">
                      Your Name
                    </span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                    required
                  />
                  {errors.name && (
                    <span className="text-red-900"> name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sm font-semibold">
                      Photo
                    </span>
                  </label>
                  <input
                    {...register("image",)}
                    type="file"
                    placeholder="Enter your photo url"
                    className="file-input file-input-bordered w-full max-w-xs "
                  />
                  {errors.image && (
                    <span className="text-red-900"> image is required</span>
                  )}
                </div>

                <label className="label">
                  <span className="label-text text-sm font-semibold">
                    Email address
                  </span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
                {errors.email && (
                  <span className="text-red-900"> email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm font-semibold">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                  })}
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-900"> password is required</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-900"> max 20 carecter</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-900"> min 6 carecter</span>
                )}
              </div>

              <div className="flex gap-2 mt-3">
                <input type="checkbox" name="checkbox" id="" />
                <p className="font-normal text-xs">
                  Accept <span className="font-bold">Term & Conditions</span>
                </p>
              </div>
              <div className="form-control mt-4">
                <button className="p-2 rounded bg-neutral text-white">
                  Register
                </button>
              </div>
              <p className="text-center font-semibold text-xs mt-4">
                Already Have An Account ?
                <Link className="text-[#F75B5F]" to="/login">
                  {" "}
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
