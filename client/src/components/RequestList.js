import React, { useState, useEffect } from 'react';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  // Fetch requests from your backend API
  useEffect(() => {
    // Replace the URL with your actual backend API endpoint
    fetch('http://127.0.0.1:5000/requests')
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error('Error fetching requests:', error));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Request List</h2>

      {requests.length === 0 ? (
        <p>No requests available.</p>
      ) : (
        <ul>
          {requests.map((request) => (
            <li key={request.id} className="mb-4">
              <strong>Asset Name:</strong> {request.asset_name}
              <br />
              <strong>Description:</strong> {request.description}
              <br />
              <strong>Quantity:</strong> {request.quantity}
              <br />
              <strong>Urgency:</strong> {request.urgency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestList;
