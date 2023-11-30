import React, { useState, useEffect } from 'react';
import "../Styles/allAssignments.css"
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
    <div>
      <h2 className="table-title">All Assignments</h2>
      <table className="assignment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Asset ID</th>
            <th>User ID</th>
            <th>Assignment Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.id}</td>
              <td>{assignment.asset_id}</td>
              <td>{assignment.user_id}</td>
              <td>{assignment.assignment_date}</td>
              <td>{assignment.return_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAssignments;
