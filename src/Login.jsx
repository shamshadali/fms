import React, { useState } from "react";

const LoginPage = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://www.dev.carezen.net/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
       console.log("Email :", email);
       console.log("Password :", password);

      if (!response.ok) {
        // If the API responds with an error status, show an error message
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed. Please try again.");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Handle successful login (e.g., store token, redirect to dashboard, etc.)
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Welcome to Schar Consulting</h1>
        <p style={styles.subtitle}>
          Use the form below to log in to your Schar Consulting Systems account.
        </p>
        <form style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8fbff",
  },
  formContainer: {
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2b4c70",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6d7d8b",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    height: "40px",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #d3dce6",
    outline: "none",
  },
  button: {
    height: "40px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#1890ff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LoginPage;
