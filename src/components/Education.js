import React from 'react';

function Education(props) {
  const { school, handleSchoolChange, handleSchoolSubmit } = props;
  return (
    <div>
      <h2>Education</h2>
      <form action="#" className="education" onSubmit={handleSchoolSubmit}>
        <input
          type="text"
          name="name"
          value={school.name}
          onChange={handleSchoolChange}
          placeholder="University Name"
        />
        <input
          type="text"
          name="city"
          value={school.city}
          onChange={handleSchoolChange}
          placeholder="City"
        />
        <input
          type="text"
          name="degree"
          value={school.degree}
          onChange={handleSchoolChange}
          placeholder="Degree"
        />
        <input
          type="text"
          name="subject"
          value={school.subject}
          onChange={handleSchoolChange}
          placeholder="Subject"
        />
        <input
          type="text"
          name="startDate"
          value={school.startDate}
          onChange={handleSchoolChange}
          placeholder="From"
        />
        <input
          type="text"
          name="endDate"
          value={school.endDate}
          onChange={handleSchoolChange}
          placeholder="To"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Education;
