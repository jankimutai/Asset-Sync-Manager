import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "../Styles/asset-form.css";

const AssetForm = () => {
  const [formData, setFormData] = useState({
    assetName: '',
    category: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.assetName || !formData.category || !formData.imageUrl) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields must be filled.',
      });
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('asset_name', formData.assetName);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('image', formData.imageUrl);
      formDataToSend.append('user_id', 1);
  
      const response = await fetch('http://localhost:5555/assets', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (!response.ok) {
        throw new Error('Failed');
      }
  
      setFormData({
        assetName: '',
        category: '',
        imageUrl: '',
      });
  
      Swal.fire({
        icon: 'success',
        title: 'Asset submitted successfully!',
      });
  
      console.log('Asset submitted successfully');
    } catch (error) {
      console.error('Error submitting asset:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className='overlay-background'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="assetName">Asset Name:</label>
          <input
            type="text"
            id="assetName"
            name="assetName"
            value={formData.assetName}
            onChange={handleChange}
            placeholder="Enter asset name"
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
          />

          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder='Enter url'
          />

          <button type="submit">
            Submit Asset
          </button>
        </form>
      </div>
   </div>
  )}
 export default AssetForm