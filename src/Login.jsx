import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      alert("Login successful");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center",
  },
  input: {
    width: "90%",
    padding: "8px",
    margin: "10px 0",
  },
  button: {
    padding: "8px 20px",
    cursor: "pointer",
  },
};

export default LoginForm;
