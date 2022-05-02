import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "./SignUp.css";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });

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

  const handleConfirmPasswordOnChange = (event) => {
    if (event.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password don't match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  useEffect(() => {
    if (user) {
      // navigate("/home");
      navigate(from, { replace: true });
    }
  }, [user]);

  const handleFormLogIn = (event) => {
    event.preventDefault();
    Swal.fire({
      position: "Center",
      icon: "success",
      title: "Thanks for With Us.",
      showConfirmButton: false,
      timer: 2500,
    });

    createUserWithEmailAndPassword(userInfo.email, userInfo.password);

    if (!user) {
      setErrors("email not found.");
    }
    // console.log(email, password);
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
          toast("Something went wrong.");
      }
    }
    // console.log(hookError);
  }, [hookError]);

  return (
    <div className="pt-4 back-image">
      <div className=" neo pt-4 justify-content-center ">
        <h2 className="text-center ">Sign Up</h2>
        <form onSubmit={handleFormLogIn}>
          <div className="container-form">
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
            <input
              onChange={handleConfirmPasswordOnChange}
              type="password"
              name="Password"
              id=""
              placeholder="Confirm Password"
              required
            />
            {errors?.password && (
              <p className="error-message">{errors.password}</p>
            )}
            <div className="d-flex align-items-center">
              <div>
                <input
                  style={{ height: "20px", width: "20px" }}
                  onClick={() => setAgree(!agree)}
                  type="checkbox"
                  name="Terms"
                  id="terms"
                />
              </div>
              <div>
                <label
                  className={`ps-2 ${agree ? "" : "text-danger"}`}
                  htmlFor="terms"
                >
                  <p className="para">Accept Honda App Terms Conditions.</p>
                </label>
              </div>
            </div>
            <input
              disabled={!agree}
              className="btn btn-primary"
              type="submit"
              value="Sign Up"
            />
          </div>
          {loading}
          {Loading}
          <ToastContainer></ToastContainer>
        </form>
        <p className="mt-3 text-center" style={{ fontWeight: "700" }}>
          Already have an account ?
          <Link
            to="/login"
            style={{ fontWeight: "700" }}
            className="text-decoration-none ms-2"
          >
            Please Login
          </Link>
        </p>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
