import React from 'react';

function GeneralInfo(props) {
  const { genInfo, handleChange } = props;
  return (
    <div>
      <h2>General Information</h2>
      <form action="#" className="gen-info">
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" value={genInfo.firstName} onChange={handleChange} />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" value={genInfo.lastName} onChange={handleChange} />
        </label>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" value={genInfo.title} onChange={handleChange} />
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" name="address" value={genInfo.address} onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" value={genInfo.email} onChange={handleChange} />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={genInfo.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
