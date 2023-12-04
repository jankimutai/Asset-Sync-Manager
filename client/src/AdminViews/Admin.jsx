import React from 'react'
import AssetList from '../components/AssetList'
import TransactionList from '../components/TransactionsList'
import AllAssignments from '../components/AssignmentList'
import Manager from "../components/dashboard/Manager"
function AdminDashboard() {
  return (
    <div>
      <AssetList />
      <TransactionList />
      <AllAssignments />  
      <Manager />
     
    </div>
  )
}

export default AdminDashboard
