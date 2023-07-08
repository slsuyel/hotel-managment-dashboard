/* eslint-disable react/prop-types */
import React from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

const Transaction = () => {
  const transactions = [
    {
      id: 1,
      amount: 100,
      date: '2023-07-08'
    },
    {
      id: 2,
      amount: 200,
      date: '2023-07-09'
    },
    {
      id: 3,
      amount: 300,
      date: '2023-07-10'
    }
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [selectedTransaction, setSelectedTransaction] = React.useState(null);

  const handleShowModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const Transaction = ({ transaction }) => {
    return (
      <tr>
        <td>{transaction.id}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.date}</td>
        <td>
          <Button variant="primary" onClick={() => handleShowModal(transaction)}>
            Details
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h1>Transaction Page</h1>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTransaction && (
            <div>
              <p>ID: {selectedTransaction.id}</p>
              <p>Amount: {selectedTransaction.amount}</p>
              <p>Date: {selectedTransaction.date}</p>
              {/* Display other transaction details */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Transaction;
