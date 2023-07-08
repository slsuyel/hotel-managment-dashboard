import React from 'react';
import { Table, Button } from 'react-bootstrap';

const fakeHotels = [
  {
    id: 1,
    name: 'Hotel A',
    status: 'active'
  },
  {
    id: 2,
    name: 'Hotel B',
    status: 'active'
  },
  {
    id: 3,
    name: 'Hotel C',
    status: 'active'
  },
  {
    id: 4,
    name: 'Hotel C',
    status: 'active'
  },
  {
    id: 5,
    name: 'Hotel C',
    status: 'active'
  }
];

const AllHotels = () => {
  const handleDelete = (hotelId) => {
    // Logic to delete the hotel with the given ID
    console.log(`Delete hotel with ID: ${hotelId}`);
  };

  const handleBan = (hotelId) => {
    // Logic to ban the hotel with the given ID
    console.log(`Ban hotel with ID: ${hotelId}`);
  };

  const handleActivate = (hotelId) => {
    // Logic to activate the hotel with the given ID
    console.log(`Activate hotel with ID: ${hotelId}`);
  };

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-nowrap">Hotel Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fakeHotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>{hotel.status}</td>
              <td className="d-flex  gap-2">
                <Button variant="danger" onClick={() => handleDelete(hotel.id)}>
                  Delete
                </Button>
                <Button variant="warning" onClick={() => handleBan(hotel.id)}>
                  Ban
                </Button>
                <Button variant="success" onClick={() => handleActivate(hotel.id)}>
                  Inactivate
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllHotels;
