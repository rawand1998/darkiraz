import { useState, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Register() {
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoadhing] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoadhing(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      console.log(emailRef.current.value,passwordRef.current.value);
      navigate("/home")
    } catch {
      setError("Failed to create an account");
    }
    setLoadhing(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <h3>{error}</h3>}
        <h3>
          Already have an account? <Link to="/login">Login</Link>
        </h3>
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <input
          type="password"
          placeholder="Confirm password"
          ref={confirmPasswordRef}
        />
        <button type="submit" disabled={loading}>
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
