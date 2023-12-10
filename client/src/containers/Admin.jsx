import React from 'react'
import AssetList from '../components/AssetList'
import TransactionList from '../components/TransactionsList'
import AllAssignments from '../components/AssignmentList'
import AssetForm from '../components/AssetForm'

function AdminDashboard() {
  return (
    <div>
      <AssetForm />
      <AssetList />
      <TransactionList />
      <AllAssignments />  
     
    </div>
  )
}

export default AdminDashboard
