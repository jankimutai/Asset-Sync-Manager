import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import '../Styles/MaintenanceForm.css';

const MaintenanceForm = () => {
  const [formData, setFormData] = useState({
    asset_id: '',
    date_of_maintenance: '',
    type: '',
    description: '',
    cost: ''
  });

  const handleChange = async (e) => {
    await setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await axios.post('http://127.0.0.1:5555/maintenances', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response);

      if (response.status === 200) {
        console.log('Data:', response.data);
        alert('Maintenance created successfully');
      } else {
        console.error('Error creating maintenance:', response.data);
        alert('Error creating maintenance. Please check the console for details.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred. Please check the console for details.');
    }
  };

  return (
    <div>
      <h2>Maintenance Form</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="assetId">Asset ID:</label>
        <input
          type="number"
          id="assetId"
          name="asset_id"
          value={formData.asset_id}
          onChange={handleChange}
          required
        />
        

        <label htmlFor="dateOfMaintenance">Date of Maintenance:</label>
        <input
          type="date"
          id="dateOfMaintenance"
          name="date_of_maintenance"
          value={formData.date_of_maintenance}
          onChange={handleChange}
          required
        />

        <label htmlFor="maintenanceType">Maintenance Type:</label>
        <input
          type="text"
          id="maintenanceType"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="cost">Cost:</label>
        <input
          type="number"
          id="cost"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MaintenanceForm;
