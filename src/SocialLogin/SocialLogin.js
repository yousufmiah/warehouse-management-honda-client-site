import React from "react";
import "./SocialLogin.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";
import googleLogo from "../Assets/images/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error) {
    // errorElement = <p className="text-danger">Error: {error.message}</p>;
    errorElement = <p className="text-danger">Error: "invalid"</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p
          className="px-4"
          style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          or
        </p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success w-100 d-block mx-auto my-2"
      >
        <img
          className="me-2"
          style={{ width: "30px" }}
          src={googleLogo}
          alt=""
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
