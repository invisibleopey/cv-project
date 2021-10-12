import React from 'react';

function GeneralInfo(props) {
  const { handleChange, genInfo } = props;
  return (
    <div>
      <h2>General Information</h2>
      <form action="#" className="gen-info">
        <input
          type="text"
          name="firstName"
          value={genInfo.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={genInfo.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="title"
          value={genInfo.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="address"
          value={genInfo.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          type="email"
          name="email"
          value={genInfo.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phoneNumber"
          value={genInfo.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <textarea
          name="description"
          cols="10"
          rows="10"
          placeholder="Description"
          value={genInfo.description}
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
}

export default GeneralInfo;
