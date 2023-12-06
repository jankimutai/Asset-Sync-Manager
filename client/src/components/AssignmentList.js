import React, { useState, useEffect } from 'react';
import "../Styles/allAssignments.css";

const AllAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/assignments');
        if (!response.ok) {
          throw new Error(`Error fetching assignments: ${response.status}`);
        }

        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="all-assignments-container">
      <table className="assignment-table">
        <thead>
          <tr>
            <th colSpan="4" className="table-heading">All Assignments</th>
          </tr>
          <tr>
            <th>Asset Name</th>
            <th>Assigned User</th>
            <th>Assignment Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id} className="assignment-row">
              <td className="asset-name-item">{assignment.asset_name}</td>
              <td className="assigned-user" style={{ textTransform: 'capitalize' }}>{assignment.full_name}</td>
              <td className="assignment-date">{assignment.assignment_date}</td>
              <td className="return-date">{assignment.return_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAssignments;
