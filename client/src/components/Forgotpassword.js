import React, { useState } from 'react';

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  function handleNewPasswordChange(e) {
    setNewPassword(e.target.value);
    setPasswordMatchError('');
    setPasswordAlert('');
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
    setPasswordMatchError('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Password validation
    if (newPassword.length < 8) {
      setPasswordAlert('Password must be at least 8 characters long.');
      return;
    }

    // Password confirmation validation
    if (newPassword !== confirmPassword) {
      setPasswordMatchError('Passwords do not match.');
      return;
    }

    // Continue with the password change logic (e.g., send to the server)
    // ...

    // Reset form fields
    setNewPassword('');
    setConfirmPassword('');
  }

  return (
    <div className="forgot-password-container bg-gray-100 h-screen flex items-center justify-center">
      <div className="forgot-password-form-container bg-white p-8 rounded shadow-md">
        <h3 className="text-2xl mb-4 font-bold">Forgot Password</h3>
        {passwordAlert && (
          <div className="mb-4 text-red-500">{passwordAlert}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className={`w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                passwordMatchError ? 'border-red-500' : ''
              }`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {passwordMatchError && (
              <small className="text-red-500">{passwordMatchError}</small>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
