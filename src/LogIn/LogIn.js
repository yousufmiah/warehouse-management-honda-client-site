import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LogIn.css";
import Loading from "../Loading/Loading";

const LogIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleEmailOnChange = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    // console.log(validEmail);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordOnChange = (event) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(event.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 character" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleFormLogIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast("Invalid Email, Please provide valid email.");
          break;
        case "auth/invalid-password":
          toast("Wrong Password");
          break;
        default:
        // toast("Something went wrong.");
      }
    }
    console.log(hookError);
  }, [hookError]);

  return (
    <div className="pt-4 back-image">
      <div className=" neo pt-4 justify-content-center ">
        <h2 className="text-center ">Login</h2>
        <form onSubmit={handleFormLogIn}>
          <div className="form-container">
            <input
              onChange={handleEmailOnChange}
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
            />
            {errors?.email && <p className="error-message">{errors.email}</p>}
            <input
              onChange={handlePasswordOnChange}
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
            {errors?.password && (
              <p className="error-message">{errors.password}</p>
            )}
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
          {Loading}
          {loading}
          <ToastContainer></ToastContainer>
        </form>
        <p className="mt-3 text-center" style={{ fontWeight: "700" }}>
          New to Honda App ?
          <Link
            to="/signUp"
            style={{ fontWeight: "700" }}
            className="text-decoration-none ms-2"
          >
            Please Register
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default LogIn;
