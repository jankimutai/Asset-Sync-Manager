import React from 'react';
import { useAuth } from './AuthContext';
const AssignmentComponent = () => {
  const {user} = useAuth()
  return (
    <div className="assignments-container">
      <table className="assignments-table">
        <thead>
          <tr>
            <th colSpan="3" className="table-heading">
              My Assignments
            </th>
          </tr>
          <tr>
            <th>Asset Name</th>
            <th>Assignment Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {user && user.assignments ? (
            user.assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.asset.asset_name}</td>
                <td>{assignment.assignment_date}</td>
                <td>{assignment.return_date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Please login first</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
};

export default AssignmentComponent;
