import React from 'react'
import AssetList from '../components/AssetList'
import TransactionList from '../components/TransactionsList'
import AllAssignments from '../components/AssignmentList'

function AdminDashboard() {
  return (
    <div>
      <AssetList />
      <TransactionList />
      <AllAssignments />  
     
    </div>
  )
}

export default AdminDashboard
