import React,{useEffect,useState} from 'react';
import { FaRegCalendarCheck, FaRegCalendarTimes, FaCheckCircle, FaCalculator } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';
import "../Styles/userDashboard.css";
import { FaTimesCircle,FaPlusCircle,FaSort,FaQuestionCircle} from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import RequestForm from "./RequestForm"
import AssignmentComponent from "../components/UserAssignments"
const Dashboard = () => {
  const [userRequests, setUserRequests] = useState([]);
  const [error, setError] = useState(null);
  const [showAddRequestForm, setShowAddRequestForm] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchUserRequests = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/user_requests', {
          credentials: 'include',
        });
        if (response.status === 200) {
          const data = await response.json();
      
          setUserRequests(data);
        } else {
          const errorData = await response.json();
         
          setError(errorData.error);
        }
      } catch (error) {
    
        setError('An error occurred while fetching user requests.');
      }
    };

    fetchUserRequests();
  }, []);
  const approvedCount = userRequests.filter(request => request.status === 'Approved').length;
  const pendingCount = userRequests.filter(request => request.status === 'Pending').length;
  const rejectedCount = userRequests.filter(request => request.status === 'Rejected').length;
  const totalCount = userRequests.length;

  const [sortKey, setSortKey] = useState(''); 
  const [filterStatus, setFilterStatus] = useState(''); 
  const paginate = pageNumber => setCurrentPage(pageNumber);



  const handleNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSort = (key) => {
    setSortKey(key);
  };

  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };

  const sortedAndFilteredItems = userRequests
    .filter((request) => (filterStatus ? request.status === filterStatus : true))
    .sort((a, b) => {
      if (sortKey === 'urgency') {
        return a.urgency.localeCompare(b.urgency);
      } else if (sortKey === 'status') {
        return a.status.localeCompare(b.status);
      } else {
        return 0;
      }
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedAndFilteredItems.slice(indexOfFirstItem, indexOfLastItem);
  
    const maxPage = Math.ceil(sortedAndFilteredItems.length / itemsPerPage);

  return (
    <section>
      <section className="dashboard">
        <div className="dashboard-item" onClick={() => setShowAddRequestForm(true)}>
          <div className="dashboard-item-content">
            <div className="dashboard-item-icon">
              <FaPlusCircle />
            </div>
            <div className="dashboard-item-count"></div>
          </div>
          <div className="dashboard-item-label">Add a request</div>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-item-content">
            <div className="dashboard-item-count">{approvedCount}</div>
            <div className="dashboard-item-icon green-icon"><FaCheckCircle /></div>
            
          </div>
          <div className="dashboard-item-label">Completed Requests</div>
        </div>

        <div className="dashboard-item">
          <div className="dashboard-item-content">
            <div className="dashboard-item-count">{pendingCount}</div>
            
            <div className="dashboard-item-icon green-icon"><FaRegCalendarCheck /></div>
          </div>
          <div className="dashboard-item-label">Active Requests</div>
        </div>

        <div className="dashboard-item">
          <div className="dashboard-item-content">
            <div className="dashboard-item-count">{rejectedCount}</div>
            <div className="dashboard-item-icon red-icon"><FaRegCalendarTimes /></div>
          </div>
          <div className="dashboard-item-label">Rejected Requests</div>
        </div>

        <div className="dashboard-item">
          <div className="dashboard-item-content">
            <div className="dashboard-item-count">{totalCount}</div>
            <div className="dashboard-item-icon times"><FaCalculator /></div>
          </div>
          <div className="dashboard-item-label">Total Requests</div>
        </div>
      </section>
      <section>
        <div className="user-request-list-container">
          {error && <p className="error-message">Error: {error}</p>}
            <div>
              <table className="request-table">
              <thead>
                <tr>
                  <th colSpan="5" className="table-heading">My Requests</th>
                </tr>
                  <tr>
                    <th>Asset Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                      <th onClick={() => handleSort('urgency')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                        Urgency <FaSort />
                      </th>
                      <th onClick={() => handleSort('status')}>
                        Status <FaSort />
                      </th>
                  </tr>
                </thead>
                <tbody>
                {currentItems.map((request) => (
                  <tr key={request.request_id}>
                    <td>{request.asset_name}</td>
                    <td>{request.description}</td>
                    <td>{request.quantity}</td>
                    <td>{request.urgency}</td>
                    <td>
                    {request.status === 'Approved' ? (
                      <span className="approved-status">
                        <FaCheckCircle /> {request.status}
                      </span>
                    ) : request.status === 'Pending' ? (
                      <span className="pending-status">
                        <FaQuestionCircle /> {request.status}
                      </span>
                    ) : (
                      <span className="rejected-status">
                        <FaTimesCircle /> {request.status}
                      </span>
                    )}
                  </td>
                  </tr>
                ))}
              </tbody>
              </table>
              <div className="pagination">
                <button onClick={handlePrevPage}>
                  <MdKeyboardArrowLeft />
                </button>
                {[...Array(maxPage)].map((_, index) => (
                  <button key={index + 1} onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </button>
                ))}
                <button onClick={handleNextPage}>
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
           </div>
  
    </section>
    <section className='assignment-cont'>
      <AssignmentComponent />

    </section>
    {showAddRequestForm && (
        <>
          <div className="overlay-background" onClick={() => setShowAddRequestForm(false)}></div>
          <RequestForm onClose={() => setShowAddRequestForm(false)} />
        </>
      )}
    </section>
  );
};

export default Dashboard;
