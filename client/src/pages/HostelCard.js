import React from 'react';

const HostelCard = ({ hostel }) => {
  return (
    <div className="card">
      {/* <img src={`images/${hostel.image}`} alt={hostel.name} /> */}

      <div className="card-details">
        <h3>{hostel.name}</h3>
        <p>Location: {hostel.location}</p>
        <p>Price: {hostel.price}</p>
        <p>Amenities: {hostel.amenities}</p>
        <p>{hostel.description}</p>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
};

export default HostelCard;

