import React from 'react';

function GeneralInfo() {
  return (
    <div>
      <h2>General Information</h2>
      <form action="#" className="gen-info">
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" value="Abdullahi" />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" value="Muritala" />
        </label>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" value="Junior Web Developer" />
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" name="address" value="Agbede, Ilorin, Nigeria" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" value="exaple@gmail.com" />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number:
          <input type="text" name="phoneNumber" value="1234567890" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
