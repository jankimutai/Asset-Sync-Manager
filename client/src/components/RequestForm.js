import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "../Styles/request-form.css"
const RequestForm = ({onClose}) => {
  const [formData, setFormData] = useState({
    assetName: '',
    description: '',
    quantity: 0,
    urgency: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.assetName || !formData.description || !formData.quantity || !formData.urgency) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields must be filled.',
      });
      return;
    }
    try {
      
      const response = await fetch('http://localhost:5555/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          asset_name: formData.assetName,
          description: formData.description,
          quantity: formData.quantity,
          urgency: formData.urgency,
          status: 'Pending',
          user_id: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setFormData({
        assetName: '',
        description: '',
        quantity: 0,
        urgency: '',
      });

      
      Swal.fire({
        icon: 'success',
        title: 'Request submitted successfully!',
      });

      console.log('Request submitted successfully');
    } catch (error) {
      console.error('Error submitting request:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="overlay">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-lg font-semibold text-black-900 dark:text-white bg-grey">
          Create New Request
        </h3>
        <button 
          type="button" 
          onClick={onClose}
          className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="form-container">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 rounded-md shadow-md">
        <label className="block text-sm font-bold mb-2">
          Asset Name:
          <input
            type="text"
            name="assetName"
            value={formData.assetName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>

        <label className="block text-sm font-bold mb-2">
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>

        <label className="block text-sm font-bold mb-2">
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>

        <label className="block text-sm font-bold mb-2">
          Urgency:
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="" disabled className="text-lg">Select urgency</option>
            <option value="low" className="text-lg">Low</option>
            <option value="medium" className="text-lg">Medium</option>
            <option value="high" className="text-lg">High</option>
          </select>
        </label>

        <button
          type="submit"
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
          </svg>
          Submit Request
        </button>
      </form>

      </div>
        
    </div>
  );
};

export default RequestForm;
