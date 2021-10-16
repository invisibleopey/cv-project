import React from 'react';

function GeneralInfo(props) {
  const { handleChange, firstName, lastName, title, address, email, phoneNumber, description } =
    props;
  return (
    <div>
      <h2>General Information</h2>
      <form action="#" className="gen-info">
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input type="text" name="title" value={title} onChange={handleChange} placeholder="Title" />
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <textarea
          name="description"
          cols="10"
          rows="10"
          placeholder="Description"
          value={description}
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
}

export default GeneralInfo;
