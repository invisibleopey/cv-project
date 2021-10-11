import React from 'react';

function Overview(props) {
  const { firstName, lastName, title, address, email, phoneNumber, description } = props;
  return (
    <div>
      <div className="overview-hero">
        <h2>{`${firstName} ${lastName}`}</h2>
        <h3>{title}</h3>
      </div>
      <div className="overview-main">
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>Address: {address}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
