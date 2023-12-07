import React from 'react'
import AssetList from '../components/AssetList'
import TransactionList from '../components/TransactionsList'
import AllAssignments from '../components/AssignmentList'
import Manager from "../components/dashboard/Manager"
import "../Styles/manager.css"
import AssetForm from '../components/AssetForm'
import AssignmentComponent from '../components/AssignmentForm'
function AdminDashboard() {
  return (
    <section >
      <AssetForm/>
      <AssetList />
      <TransactionList/>
      <AssignmentComponent/>
      <AllAssignments />  
      <Manager />
     
    </section>
  )
}

export default AdminDashboard
