import React from 'react';

function Education(props) {
  const { school } = props;
  return (
    <div>
      <h2>Education</h2>
      <form action="#" className="education">
        <input
          type="text"
          name="name"
          value={school.name}
          // onChange={handleChange}
          placeholder="University Name"
        />
        <input
          type="text"
          name="city"
          value={school.city}
          // onChange={handleChange}
          placeholder="City"
        />
        <input
          type="text"
          name="degree"
          value={school.degree}
          // onChange={handleChange}
          placeholder="Degree"
        />
        <input
          type="text"
          name="subject"
          value={school.subject}
          // onChange={handleChange}
          placeholder="Subject"
        />
        <input
          type="text"
          name="startDate"
          value={school.startDate}
          // onChange={handleChange}
          placeholder="From"
        />
        <input
          type="text"
          name="endDate"
          value={school.endDate}
          // onChange={handleChange}
          placeholder="To"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Education;
