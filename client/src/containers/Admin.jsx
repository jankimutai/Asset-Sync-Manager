import React, { useState, useEffect } from 'react';
import { FaRegCalendarCheck, FaRegCalendarTimes, FaCheckCircle, FaCalculator, FaPlusCircle } from 'react-icons/fa';
import AssetForm from '../components/AssetForm';
import AssignmentComponent from '../components/AssignmentForm';
import '../Styles/userDashboard.css';
import AllAssignments from '../components/AssignmentList';
import TransactionList from '../components/TransactionsList';
import AssetList from '../components/AssetList';

const AdminDashboard = () => {
  const [showAddAssetForm, setShowAddAssetForm] = useState(false);
  const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);
  const [activeAssetsCount, setActiveAssetsCount] = useState(0);
  const [underMaintenanceAssetsCount, setUnderMaintenanceAssetsCount] = useState(0);
  const [pendingAssetsCount, setPendingAssetsCount] = useState(0);
  const [totalAssetsCount, setTotalAssetsCount] = useState(0);

  const [formData, setFormData] = useState({
    assetName: '',
    model: '',
    datePurchased: '',
    purchaseCost: '',
    imageUrl: '',
    manufacturer: '',
    status: '',
    category: '',
    serialNumber: '',
  });

  useEffect(() => {
    const fetchAssetCounts = async () => {
      try {
        const response = await fetch('http://localhost:5555/assets/count', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching asset counts');
        }

        const data = await response.json();
        setActiveAssetsCount(data.activeAssetsCount);
        setUnderMaintenanceAssetsCount(data.underMaintenanceAssetsCount);
        setPendingAssetsCount(data.pendingAssetsCount);
        setTotalAssetsCount(data.totalAssetsCount);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchAssetCounts();
  }, []);

  const handleAddAsset = async () => {
    try {
      const response = await fetch('http://localhost:5555/assets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const statusCode = response.status;
        throw new Error(`Error creating asset: ${statusCode}`);
      }

      setActiveAssetsCount(activeAssetsCount + 1);
      setTotalAssetsCount(totalAssetsCount + 1);

      setFormData({
        assetName: '',
        model: '',
        datePurchased: '',
        purchaseCost: '',
        imageUrl: '',
        manufacturer: '',
        status: '',
        category: '',
        serialNumber: '',
      });

      setShowAddAssetForm(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="dashboard-container">
      <section className="dashboard">
      <div className="dashboard-item" onClick={() => setShowAddAssetForm(!showAddAssetForm)}>
          <div className="dashboard-item-content">
            <div className="dashboard-item-icon">
              <FaPlusCircle />
            </div>
            <div className="dashboard-item-count"></div>
          </div>
          <div className="dashboard-item-label">Add an asset</div>
        </div>
        <div className="dashboard-item" onClick={() => setShowAddAssignmentForm(!showAddAssignmentForm)}>
        <div className="dashboard-item-content">
          <div className="dashboard-item-icon">
            <FaPlusCircle />
          </div>
        </div>
        <div className="dashboard-item-label">Add an Assignment</div>
      </div>
        <div className="dashboard-item">
          <div className="dashboard-item-content">
            <div className="dashboard-item-count">{activeAssetsCount}</div>
            <div className="dashboard-item-icon green-icon">
              <FaCheckCircle />
            </div>
          </div>
          <div className="dashboard-item-label">Active Assets</div>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-item-content">
            <div className="dashboard-item-count">{underMaintenanceAssetsCount}</div>
            <div className="dashboard-item-icon yellow-icon">
              <FaRegCalendarCheck />
            </div>
          </div>
          <div className="dashboard-item-label">Under Maintenance</div>
        </div>

        <div className="dashboard-item">
          <div className="dashboard-item-content">
            <div className="dashboard-item-count">{pendingAssetsCount}</div>
            <div className="dashboard-item-icon red-icon">
              <FaRegCalendarTimes />
            </div>
          </div>
          <div className="dashboard-item-label">Pending Assets</div>
        </div>


        <div className="dashboard-item">
          <div className="dashboard-item-content">
            <div className="dashboard-item-count">{totalAssetsCount}</div>
            <div className="dashboard-item-icon times">
              <FaCalculator />
            </div>
          </div>
          <div className="dashboard-item-label">Total Assets</div>
        </div>
      </section>

      {showAddAssetForm && (
        <div className="dashboard-section">
          <AssetForm onAddAsset={handleAddAsset} setFormData={setFormData} formData={formData} onClose={() => setShowAddAssetForm(false)} />
        </div>
      )}

      {showAddAssignmentForm && (
        <div className="dashboard-section">
          <AssignmentComponent onClose={() => setShowAddAssignmentForm(false)} />
        </div>
      )}

      <div className="dashboard-section">
        <AssetList />
      </div>

      <div className="dashboard-section">
        <AllAssignments />
      </div>

      <div className="dashboard-section">
        <TransactionList />
      </div>
    </section>
  );
};

export default AdminDashboard;
