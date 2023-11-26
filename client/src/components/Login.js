import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let loginData = {
      email: email,
      password: password,
    };

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));

    setEmail('');
    setPassword('');
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>E-mail or phone number</strong>
            </label>
            <input
              type="text"
              placeholder="Type your e-mail or phone number"
              className="form-control rounded-0"
              onChange={handleEmail}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Type your password"
              className="form-control rounded-0"
              onChange={handlePassword}
            />
            <small className="form-text text-muted">
              <Link to="/">Forgot Password?</Link>
            </small>
          </div>
          <button className="btn btn-success w-100 rounded-0">Sign In</button>

          <Link
            to="/registration"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
