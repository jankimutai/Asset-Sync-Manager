import React,{useState,useEffect} from 'react';
import {FaCheckCircle } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';
import "../Styles/userDashboard.css";
import { FaTimesCircle,FaPlusCircle,FaSort,FaQuestionCircle} from 'react-icons/fa';

import RequestForm from "./RequestForm"
import AssignmentComponent from "../components/UserAssignments"
import { useAuth } from './AuthContext';
const Dashboard = () => {
  const {user} = useAuth()
  const [error, setError] = useState(null);
  const [showAddRequestForm, setShowAddRequestForm] = useState(false);

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
                      <th>
                        Urgency <FaSort />
                      </th>
                      <th>
                        Status <FaSort />
                      </th>
                  </tr>
                </thead>
                {(user && user.requests) ? (<tbody>
                {user.requests.map((request) => (
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
              </tbody>):(<tbody></tbody>) }
                
              </table>
              
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
