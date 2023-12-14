import React, { useState, useEffect } from 'react';

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(10);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/requests')
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error('Error fetching requests:', error));
  }, []);

  // Calculate current requests for the current page
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="assignments-container">
      <h2 className="table-heading">Request List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2">Asset Name</th>
            <th className='py-2'>User</th>
            <th className="py-2">Description</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Urgency</th>
            <th className='py-2'>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRequests.map((request) => (
            <tr key={request.request_id} className="mb-4">
              <td className="border py-2">{request.asset_name}</td>
              <td className='border py-2'>{request.full_name}</td>
              <td className="border py-2">{request.description}</td>
              <td className="border py-2">{request.quantity}</td>
              <td className="border py-2">{request.urgency}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {/* Generate page numbers based on the total requests and requestsPerPage */}
        {Array.from({ length: Math.ceil(requests.length / requestsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RequestList;
