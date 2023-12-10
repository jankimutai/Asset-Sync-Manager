import React from 'react'
import AssetList from '../components/AssetList'
import TransactionList from '../components/TransactionsList'
import AllAssignments from '../components/AssignmentList'
import Manager from "../components/dashboard/Manager"
import "../Styles/manager.css"
import AssignmentComponent from '../components/AssignmentForm'
function AdminDashboard() {
  return (
    <section >
      <AssetList />
      <TransactionList/>
      <AssignmentComponent/>
      <AllAssignments />  
      <Manager />
     
    </section>
  )
}

export default AdminDashboard
