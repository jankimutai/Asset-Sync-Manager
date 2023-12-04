import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useAuth } from './AuthContext';
function Register() {
  const navigate = useNavigate()
  const { login } = useAuth();
  const [user, setUser] = useState({
    full_name: '',
    username: '',
    email: '',
    password: '',
    role: '',
    department: '',
  });

  const handleName = (e) => {
    setUser({
      ...user,
      full_name: e.target.value,
    });
  };

  const handleUsername = (e) => {
    setUser({
      ...user,
      username: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleRole = (e) => {
    setUser({
      ...user,
      role: e.target.value,
    });
  };

  const handleDepartment = (e) => {
    setUser({
      ...user,
      department: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5555/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        login(data);

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have successfully registered your account.',
        });
        navigate('/home');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Error',
          text: 'An error occurred during registration. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleName}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUsername}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleEmail}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handlePassword}
              minLength="8"
              required
            />
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
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleDepartment}
              required
            />
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
