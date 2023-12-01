import React, { useState } from 'react';
import Swal from 'sweetalert2';

const RequestForm = () => {
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

    try {
      const response = await fetch('http://localhost:5000/requests', {
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

      // Show SweetAlert on successful submission
      Swal.fire({
        icon: 'success',
        title: 'Request submitted successfully!',
        showConfirmButton: false,
        timer: 1500,
      });

      console.log('Request submitted successfully');
    } catch (error) {
      console.error('Error submitting request:', error);

      // Show SweetAlert on error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-blue-100 rounded-md shadow-md">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Asset Name:
        <input
          type="text"
          name="assetName"
          value={formData.assetName}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Quantity:
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Urgency:
        <select
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="" disabled>Select urgency</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <br/>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Submit Request
      </button>
    </form>
  );
};

export default RequestForm;
