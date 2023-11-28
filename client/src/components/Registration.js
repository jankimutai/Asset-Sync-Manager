import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({
    full_name: '',
    username: '',
    email: '',
    password: '',
    role: '',
    department: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [departmentError, setDepartmentError] = useState('');

  const handleName = (e) => {
    const enteredName = e.target.value;
    setUser({
      ...user,
      full_name: enteredName,
    });
    setNameError(enteredName ? '' : 'Please enter your name');
  };

  const handleUsername = (e) => {
    const enteredUsername = e.target.value;
    setUser({
      ...user,
      username: enteredUsername,
    });
    setUsernameError(enteredUsername ? '' : 'Please enter your username');
  };

  const handleEmail = (e) => {
    const enteredEmail = e.target.value;
    setUser({
      ...user,
      email: enteredEmail,
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(enteredEmail) ? '' : 'Please enter a valid email address');
  };

  const handlePassword = (e) => {
    const enteredPassword = e.target.value;
    setUser({
      ...user,
      password: enteredPassword,
    });
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPasswordError(
      passwordRegex.test(enteredPassword)
        ? ''
        : 'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character'
    );
  };

  const handleRole = (e) => {
    setUser({
      ...user,
      role: e.target.value,
    });
  };

  const handleDepartment = (e) => {
    const enteredDepartment = e.target.value;
    setUser({
      ...user,
      department: enteredDepartment,
    });
    setDepartmentError(enteredDepartment ? '' : 'Please enter your department');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || passwordError || nameError || usernameError || departmentError) {
      console.error('Invalid input. Please correct the errors before submitting.');
      return;
    }

    // Continue with form submission logic
    fetch('http://127.0.0.1:5555/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white-500 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Create your account</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                nameError ? 'border-red-500' : ''
              }`}
              onChange={handleName}
              required
            />
            {nameError && <p className="text-red-500 text-xs italic">{nameError}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                usernameError ? 'border-red-500' : ''
              }`}
              onChange={handleUsername}
              required
            />
            {usernameError && <p className="text-red-500 text-xs italic">{usernameError}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail or phone number
            </label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailError ? 'border-red-500' : ''
              }`}
              onChange={handleEmail}
              required
            />
            {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError ? 'border-red-500' : ''
              }`}
              onChange={handlePassword}
              minLength="8"
              required
            />
            {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
            <small className="block text-gray-600 text-sm">Must be 8 characters at least</small>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <select
              value={user.role}
              onChange={handleRole}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>Select Role</option>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
              <option value="procurement">Procurement Manager</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
              Department
            </label>
            <input
              type="text"
              placeholder="Enter your department"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                departmentError ? 'border-red-500' : ''
              }`}
              onChange={handleDepartment}
              required
            />
            {departmentError && <p className="text-red-500 text-xs italic">{departmentError}</p>}
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>

          <p className="mt-4 text-sm">
            By creating an account means you agree to the{' '}
            <Link to="/terms and conditions" className="text-blue-500">
              Terms and Conditions
            </Link>
            , and our{' '}
            <Link to="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </Link>
          </p>

          <p className="mt-4 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
