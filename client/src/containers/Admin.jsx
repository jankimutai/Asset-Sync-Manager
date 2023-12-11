import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import AssetList from '../components/AssetList';
import TransactionList from '../components/TransactionsList';
import AllAssignments from '../components/AssignmentList';
import AssetForm from '../components/AssetForm';

function AdminDashboard() {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleFormVisibility} >
        {showForm ? 'Hide Form' : (
          <div>
            <FontAwesomeIcon icon={faPlusCircle} size="3x" />
            <div style={{ marginTop: '5px' }}>Add Asset</div>
          </div>
        )}
      </button>

      {showForm && <AssetForm toggleFormVisibility={toggleFormVisibility} />}
      <AssetList />
      <TransactionList />
      <AllAssignments />
    </div>
  );
}

export default AdminDashboard;
