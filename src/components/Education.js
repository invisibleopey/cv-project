import React from 'react';

function Education(props) {
  return (
    <div>
      <h2>Education</h2>
      <form action="#" className="education">
        <input
          type="text"
          name="name"
          value="University of Ilorin"
          // onChange={handleChange}
          placeholder="University Name"
        />
        <input
          type="text"
          name="city"
          value="Ilorin"
          // onChange={handleChange}
          placeholder="City"
        />
        <input
          type="text"
          name="degree"
          value="MBBS"
          // onChange={handleChange}
          placeholder="Degree"
        />
        <input
          type="text"
          name="subject"
          value="Medicine and Surgery"
          // onChange={handleChange}
          placeholder="Subject"
        />
        <input
          type="text"
          name="startDate"
          value="2015"
          // onChange={handleChange}
          placeholder="From"
        />
        <input
          type="text"
          name="endDate"
          value="2022"
          // onChange={handleChange}
          placeholder="To"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Education;
