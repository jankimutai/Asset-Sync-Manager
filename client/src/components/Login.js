import { useState } from 'react';
import {Link} from 'react-router-dom'
function Login(){
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
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));

    setEmail('');
    setPassword('');
  }

    return <div className="d-flex justify-content-center align-items-center bg-primary vh-100"> 
        <div className="bg-white p-3 rounded w-25">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Type your e-mail" className="form-control rounded-0" onChange={handleEmail}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Type your password" className="form-control rounded-0" onChange={handlePassword}/>
                </div>
                <button className="btn btn-success w-100 rounded-0">Log in</button>
                <p>You agree to our terms and policies</p>
                < Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
            </form>
        </div>
    </div>
}

export default Login