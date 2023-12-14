import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ProcurementDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [statusCounts, setStatusCounts] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5555/requests')
      .then((response) => response.json())
      .then((data) => {
        setRequests(data);
        calculateStatusCounts(data);
      })
      .catch((error) => console.error('Error fetching requests:', error));
  }, []);

  const calculateStatusCounts = (data) => {
    const counts = data.reduce((acc, request) => {
      acc[request.status] = (acc[request.status] || 0) + 1;
      return acc;
    }, {});
    setStatusCounts(counts);
  };

  const handleApprove = async (requestId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/request/approve/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const statusCode = response.status;
        throw new Error(`Error approving request: ${statusCode}`);
      }

      // Update the local state after approval
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.request_id === requestId ? { ...request, status: 'Approved' } : request
        )
      );

      // Recalculate status counts after updating requests
      calculateStatusCounts(requests);

      // Show success message using SweetAlert
      Swal.fire({
        title: 'Success!',
        text: 'Request approved successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  const handleDecline = async (requestId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/request/decline/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const statusCode = response.status;
        throw new Error(`Error declining request: ${statusCode}`);
      }

      // Update the local state after decline
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.request_id === requestId ? { ...request, status: 'Declined' } : request
        )
      );

      // Recalculate status counts after updating requests
      calculateStatusCounts(requests);

      // Show success message using SweetAlert
      Swal.fire({
        title: 'Success!',
        text: 'Request declined successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error('Error declining request:', error);
    }
  };

  return (
    
    <div className="all-assignments-container">
      <div className='dashboard'>
      <div className="dashboard-item">
        <div className="dashboard-item-content">
          <div className="dashboard-item-count">{statusCounts.Approved}</div>
          <div className="dashboard-item-icon green-icon"> {/* Include your icon component here */}</div>
        </div>
        <div className="dashboard-item-label">Approved Requests</div>
      </div>

      <div className="dashboard-item">
        <div className="dashboard-item-content">
          <div className="dashboard-item-count">{statusCounts.Pending}</div>
          <div className="dashboard-item-icon green-icon"> {/* Include your icon component here */}</div>
        </div>
        <div className="dashboard-item-label">Active Requests</div>
      </div>

      <div className="dashboard-item">
        <div className="dashboard-item-content">
          <div className="dashboard-item-count">{statusCounts.Declined}</div>
          <div className="dashboard-item-icon red-icon"> {/* Include your icon component here */}</div>
        </div>
        <div className="dashboard-item-label">Rejected Requests</div>
      </div>
      </div>

      <div className="table-container">
        <h2 className="table-heading">Request List</h2>
        <table className="w-90p mx-auto p-10">
            <thead>
            <tr>
                <th className="py-2">Asset Name</th>
                <th className='py-2'>User</th>
                <th className="py-2">Description</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Urgency</th>
                <th className='py-2'>Status</th>
                <th className="py-2">Action</th>
            </tr>
            </thead>
            <tbody>
            {requests.map((request) => (
                <tr key={request.request_id} className="mb-4">
                <td className="border py-2">{request.asset_name}</td>
                <td>{request.full_name}</td>
                <td className="border py-2">{request.description}</td>
                <td className="border py-2">{request.quantity}</td>
                <td className="border py-2">{request.urgency}</td>
                <td className='border py2'> {request.status}</td>
                <td className="border py-2">
                    {request.status === 'Pending' && (
                    <>
                        <td>
                        <button
                            className="button-89"
                            onClick={() => handleApprove(request.request_id)}
                        >
                            Approve
                        </button>
                        </td>
                        <td>
                        <button
                            className="button-89"
                            onClick={() => handleDecline(request.request_id)}
                        >
                            Decline
                        </button>
                        </td>
                    </>
                    )}
                </td>
                </tr>
            ))}
            </tbody>
      </table>
    </div>
    </div>
  );
};

export default ProcurementDashboard;
