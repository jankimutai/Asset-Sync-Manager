import { Link } from "react-router-dom";
import { useState } from "react";

function Registration() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');


  function handleName(e) {
    setName(e.target.value);
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleRole(e) {
    setRole(e.target.value);
  }

  function handleDepartment(e) {
    setDepartment(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    let newObj = {
      name: name,
      username: username,
      email: email,
      password: password,
      role: role,
      department: department,
    };

    fetch("/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
    .then((response) => {
      if (response.ok) {
        // Registration successful
        alert("Registration successful. You can now sign in.")
      } else {
        // Registration failed, handle errors here
        alert("Registration failed! Please try again")
      }
    })
    .catch((error) => {
      console.error("Error registering user:", error)
    });

    e.target.reset();
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25 navy blue" >
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Full name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control rounded-0"
              onChange={handleName}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Type your username"
              className="form-control rounded-0"
              onChange={handleUsername}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>E-mail or phone number</strong>
            </label>
            <input
              type="email"
              placeholder="Type your e-mail"
              className="form-control rounded-0"
              onChange={handleEmail}
              required
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
              minLength="8"
              required
            />
            <small className="form-text text-muted">Must be 8 characters at least</small>
          </div>
          <div className="mb-3">
            <label htmlFor="role">
              <strong>Role</strong>
            </label>
            <input
              type="text"
              placeholder="Type your role"
              className="form-control rounded-0"
              onChange={handleRole}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department">
              <strong>Department</strong>
            </label>
            <input
              type="text"
              placeholder="Type your department"
              className="form-control rounded-0"
              onChange={handleDepartment}
              required
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Sign Up</button>
          <p>
            By creating an account means you agree to the{" "}
            <Link to="/">Terms and Conditions</Link>, and our{" "}
            <Link to="/">Privacy Policy</Link>
          </p>
          <p className="mb-0">Already have an account? <Link to="/">Sign In</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
