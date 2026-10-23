import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ForgetPassword() {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [massage,setMassage] = useState("");
  const emailRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailRef.current.value);
      setMassage("Check your email for reset link");
    } catch {
      setError("resend again");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{massage}</h1>
        <p>{error}</p>
        <h2>Reset Password</h2>
        <h3>
          Remember your password? <Link to="/login">Login</Link>
        </h3>
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgetPassword;
