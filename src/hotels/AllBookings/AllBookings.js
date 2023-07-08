/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table, Form } from 'react-bootstrap';

const AllBookings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);

  const bookings = [
    { id: 1, name: 'Suyel Haque', phoneNumber: '01722597565', room: '101', hotel: 'Hotel A' },
    { id: 2, name: 'Jane Smith', phoneNumber: '9876543210', room: '202', hotel: 'Hotel B' },
    { id: 3, name: 'Mike Johnson', phoneNumber: '5555555555', room: '303', hotel: 'Hotel A' }
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = bookings.filter(
      (booking) =>
        booking.name.toLowerCase().includes(query.toLowerCase()) || booking.phoneNumber.includes(query) || booking.room.includes(query)
    );
    setFilteredBookings(filtered);
  };

  // Set initial state to show all bookings
  useEffect(() => {
    setFilteredBookings(bookings);
  }, []);

  return (
    <div>
      <h1>All Bookings</h1>
      <div className='my-3'>
        <Form.Control type="text" placeholder="Search by name, phone number, or room" value={searchQuery} onChange={handleSearch} />
      </div>
      <div className="table-responsive">
        {filteredBookings.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Room</th>
                <th>Hotel</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.phoneNumber}</td>
                  <td>{booking.room}</td>
                  <td>{booking.hotel}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default AllBookings;
