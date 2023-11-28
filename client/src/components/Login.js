import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  
  function handleSubmit(e) {
    e.preventDefault();
  
    // Password validation
    if (password.length < 8) {
      window.alert('Password must be at least 8 characters long.');
      return;
    }
  
    let loginData = {
      email: email,
      password: password,
    };
  
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((res) => {
        if (res.ok) {
          setLoginStatus('success');
          return res.json();
        } else {
          setLoginStatus('error');
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        console.log(data);
        // Display an alert for successful login
        window.alert('Login successful!');
      })
      .catch((error) => {
        // Check for specific error messages to distinguish incorrect password
        if (error.message.includes('incorrect password')) {
          window.alert('Incorrect password. Please try again.');
        } else {
          console.error(error);
        }
      });
  
    setEmail('');
    setPassword('');
  }
  
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailInput">
              Email address
            </label>
            <input
              type="text"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emailInput"
              placeholder="Enter your Email address"
              onChange={handleEmail}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordInput">
              Password
            </label>
            <input
              type="password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passwordInput"
              placeholder="Enter your password"
              onChange={handlePassword}
              required
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none"
                type="checkbox"
                value=""
                id="rememberCheckbox"
              />
              <label
                className="inline-block pl-[0.15rem] cursor-pointer"
                htmlFor="rememberCheckbox"
              >
                Remember me
              </label>
            </div>
            <Link to="/forgot">Forgot password?</Link>
          </div>

          {loginStatus === 'error' && (
            <p className="text-red-500 text-sm mb-4">Login failed. Please check your credentials.</p>
          )}

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Login
            </button>

            <p className="mt-2 text-sm">
              Don't have an account?{' '}
              <Link to="/registration" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
