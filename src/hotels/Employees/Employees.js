import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const Employees = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const employees = [
    { id: 1, name: 'John Doe', hotel: 'Hotel A' },
    { id: 2, name: 'Jane Smith', hotel: 'Hotel B' },
    { id: 3, name: 'Mike Johnson', hotel: 'Hotel C' }
  ];

  const handleDelete = (employeeId) => {
    // Logic to delete the employee with the given ID
    console.log(`Delete employee with ID: ${employeeId}`);
  };

  const handleResetPassword = () => {
    // Logic to reset the password for the selected employee
    console.log(`Reset password for employee with ID: ${selectedEmployee}`);
    setShowModal(false);
  };

  const handleShowModal = (employeeId) => {
    setSelectedEmployee(employeeId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Employees</h1>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-nowrap">Employee Name</th>
              <th className="text-nowrap">Hotel Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.hotel}</td>
                <td className="d-flex gap-2">
                  <Button variant="danger" onClick={() => handleDelete(employee.id)}>
                    Delete
                  </Button>
                  <Button variant="primary" className="text-nowrap" onClick={() => handleShowModal(employee.id)}>
                    Reset Password
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* Modal for password reset */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Enter new password" />
                <Button variant="secondary" onClick={togglePasswordVisibility}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleResetPassword}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Employees;
