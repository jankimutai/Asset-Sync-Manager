import React, { useEffect, useState } from 'react';

const AssignmentComponent = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/user_assignments', {
          credentials: 'include',
        });

        if (response.status === 200) {
          const data = await response.json();
          setAssignments(data);
        } else {
          const errorData = await response.json();
          setError(errorData.error);
        }
      } catch (error) {
     
        setError('An error occurred while fetching assignments.');
      }
    };

    fetchAssignments();
  }, []); 

  return (
    <div className="assignments-container">
   
      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <table className="assignments-table">
          <thead>
          <tr>
            <th colSpan="3" className="table-heading">My Requests</th>
          </tr>
            <tr>
              <th>Asset ID</th>
              <th>Assignment Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.asset_id}</td>
                <td>{assignment.assignment_date}</td>
                <td>{assignment.return_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssignmentComponent;
