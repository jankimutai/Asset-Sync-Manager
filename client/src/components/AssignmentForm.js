import React, { useState } from 'react';
import '../Styles/assignment.css';
import Swal from 'sweetalert2';

const AssignmentComponent = ({ onClose }) => {
  const [formData, setFormData] = useState({
    asset_id: '',
    user_id: '',
    assignment_date: '',
    return_date: '',
  });

  const handleCreateAssignment = async () => {
    if (!formData.asset_id || !formData.user_id || !formData.assignment_date || !formData.return_date) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:5550/assignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Use status code for error handling
        const statusCode = response.status;
        throw new Error(`Error creating assignment: ${statusCode}`);
      }

      // Show success message using SweetAlert
      Swal.fire({
        title: 'Success!',
        text: 'Assignment created successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      // Optionally, you can clear the form data or perform any other actions on success
      setFormData({
        asset_id: '',
        user_id: '',
        assignment_date: '',
        return_date: '',
      });
    } catch (error) {
      console.error(error.message);
      // Show error message using SweetAlert
      Swal.fire({
        title: 'Error!',
        text: `Failed to create assignment: ${error.message}`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Create Assignment</h1>
        <button type="button" onClick={handleClose} className="close-button" aria-label="Close">
          X
        </button>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateAssignment();
      }} className="mb-8">
        <label className="custom-label">
          Asset ID:
          <input
            className="custom-input"
            type="number"
            value={formData.asset_id}
            onChange={(e) => setFormData({ ...formData, asset_id: e.target.value })}
          />
        </label>

        <label className="custom-label">
          User ID:
          <input
            className="custom-input"
            type="number"
            value={formData.user_id}
            onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
          />
        </label>
        
        <label className="custom-label">
          Assignment Date:
          <input
            className="custom-input"
            type="date"
            value={formData.assignment_date}
            onChange={(e) => setFormData({ ...formData, assignment_date: e.target.value })}
          />
        </label>
        
        <label className="custom-label">
          Return Date:
          <input
            className="custom-input"
            type="date"
            value={formData.return_date}
            onChange={(e) => setFormData({ ...formData, return_date: e.target.value })}
          />
        </label>
        <button type="submit" className="custom-button">
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default AssignmentComponent;
