import React, { useState, useEffect } from 'react';
import "../Styles/transaction.css"
const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/transactions');
        if (!response.ok) {
          throw new Error(`Error fetching transactions: ${response.status}`);
        }

        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-container">

      <table className="transaction-table">
        <thead>
          <tr>
            <th colSpan="4" className="table-heading">All Transactions</th>
          </tr>
          <tr>
            <th>Transaction ID</th>
            <th>Asset ID</th>
            <th>Transaction Type</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.transaction_id}>
              <td>{transaction.transaction_id}</td>
              <td>{transaction.asset_id}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.transaction_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default TransactionList;
