import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { createUser, updateProfiles } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    // access the form data
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // const userRole = form.get("userRole");
    // console.log(name, photo, email, password, userRole);

    // validation
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{7,}$/.test(password)
    ) {
      return toast.error(
        "password at least 6 characters more and one capital letter and one special characters"
      );
    }

    // create user and update profiles
    createUser(email, password)
      .then((result) => {
        updateProfiles(name, photo);
        console.log(result.user);
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
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <h1 className="text-2xl text-[#403F3F] text-center font-semibold">
                  Register your account
                </h1>
                <hr className="mt-4" />
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#403F3F] text-sm font-semibold">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#403F3F] text-sm font-semibold">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your photo url"
                    name="photo"
                    className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                    
                  />
                </div>

                <label className="label">
                  <span className="label-text text-[#403F3F] text-sm font-semibold">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] text-sm font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
              </div>

              <div className="flex gap-2 mt-3">
                <input type="checkbox" name="checkbox" id="" />
                <p className="text-[#706F6F] font-normal text-xs">
                  Accept <span className="font-bold">Term & Conditions</span>
                </p>
              </div>
              <div className="form-control mt-4">
                <button className="p-2 rounded bg-red-600 text-white">
                  Register
                </button>
              </div>
              <p className="text-center text-[#000] font-semibold text-xs mt-4">
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
