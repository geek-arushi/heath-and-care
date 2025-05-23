import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../api/apiService";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "arushi@developer.com",
    password: "arushi1234",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // In the handleSubmit function
    try {
      const response = await authService.login(credentials);
      console.log("Login response:", response); // Add this for debugging
      localStorage.setItem("token", response.token);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.error ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Admin Login</h2>
        {error && <ErrorMessage message={error} />}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="theme-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {loading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default Login;
