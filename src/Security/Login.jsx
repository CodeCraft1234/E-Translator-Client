import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, facebookSignin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log('location in the login page', location);

  // google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
        return toast.success("google login successfully");
      })
      .catch((error) => {
        console.log(error);
        return toast.error("password or email not match");
      });
  };

  // github login
  const handlefacebooksignin = () => {
    facebookSignin ()
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
        return toast.success("facebook login successfully");
      })
      .catch((error) => {
        console.log(error);
        return toast.error("password or email not match");
      });
  };

  const handleLogin = (e) => {
    // access the form data
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photo, email, password);

    // sign in a user
    signIn(email, password).then((result) => {
      console.log(result.user);
      e.target.reset();
      const user = { email };

      // get access token
      axios
        .post("https://task-craft-server-side.vercel.app/jwt", user, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            // navigate after login
            navigate(location?.state ? location.state : "/");
            return toast.success("google login successfully");
          }
        })

        //   // navigate after login
        //   navigate(location?.state ? location.state : "/");
        //   return toast.success("user login successfully");
        // })
        .catch((error) => {
          console.log(error);
          return toast.error("password or email not match");
        });
    });
  };

  return (
    <div>
      <div className="hero min-h-screen mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <h1 className="text-3xl text-[#403F3F] text-center font-semibold">
                  Login your account
                </h1>
                <hr className="mt-4" />
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
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
				<div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
              </div>
              <div className="form-control mt-1">
                <button className="p-2 rounded bg-red-600 text-white">
                  Login
                </button>
              </div>
              <div className="form-control mt-1">
                <button
                  onClick={handleGoogleLogin}
                  className="p-2 rounded bg-green-600 text-white"
                >
                  Login With Google
                </button>
              </div>
              <div className="form-control mt-1">
                <button
                  onClick={handlefacebooksignin}
                  className="p-2 rounded bg-blue-600 text-white"
                >
                  Login With Facebook
                </button>
              </div>
              <p className="text-center text-[#000] font-semibold text-xs mt-4">
                Don't Have An Account ?
                <Link className="text-[#F75B5F]" to="/signup">
                  {" "}
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
