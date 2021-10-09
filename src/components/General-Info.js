import React from 'react';

function GeneralInfo(props) {
  const { genInfo } = props;
  return (
    <div>
      <h2>General Information</h2>
      <form action="#" className="gen-info">
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" value={genInfo.firstName} />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" value={genInfo.lastName} />
        </label>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" value={genInfo.title} />
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" name="address" value={genInfo.address} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" value={genInfo.email} />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number:
          <input type="text" name="phoneNumber" value={genInfo.phoneNumber} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
