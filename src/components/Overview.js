import React from 'react';

function Overview(props) {
  const { genInfo, schools } = props;
  return (
    <div>
      <div className="overview-hero">
        <h2>{`${genInfo.firstName} ${genInfo.lastName}`}</h2>
        <h3>{genInfo.title}</h3>
      </div>
      <div className="overview-main">
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>Address: {genInfo.address}</p>
          <p>Email: {genInfo.email}</p>
          <p>Phone Number: {genInfo.phoneNumber}</p>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{genInfo.description}</p>
        </div>
        <div className="overview-edu">
          <h3>Education</h3>
          {schools.map((school) => {
            return (
              <div className="schools">
                <div>
                  <h4>{`${school.startDate} - ${school.endDate}`}</h4>
                </div>
                <div>
                  <h4>{`${school.name}, ${school.city}`}</h4>
                  <p>Degree: {school.degree}</p>
                  <p>Subject: {school.subject}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Overview;
