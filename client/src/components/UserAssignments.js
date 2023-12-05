import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const AssignmentComponent = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const assignmentsPerPage = 5; // Fixed value for assignments per page

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

  const indexOfLastAssignment = currentPage * assignmentsPerPage;
  const indexOfFirstAssignment = indexOfLastAssignment - assignmentsPerPage;
  const currentAssignments = assignments.slice(indexOfFirstAssignment, indexOfLastAssignment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(assignments.length / assignmentsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="assignments-container">
      {error && <p className="error-message">Error: {error}</p>}
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
          {currentAssignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.asset_name}</td>
              <td>{assignment.assignment_date}</td>
              <td>{assignment.return_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrevPage}>
          <MdKeyboardArrowLeft />
        </button>
        {[...Array(Math.ceil(assignments.length / assignmentsPerPage))].map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AssignmentComponent;
