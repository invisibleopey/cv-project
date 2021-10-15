import React from 'react';

function Experience(props) {
  const { job, handleChange, handleJobSubmit } = props;
  return (
    <div>
      <h2>Experience</h2>
      <form action="#" className="experience" onSubmit={handleJobSubmit}>
        <input
          type="text"
          name="position"
          value={job.position}
          placeholder="Position"
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          value={job.company}
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={job.city}
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="startDate"
          value={job.startDate}
          placeholder="From"
          onChange={handleChange}
        />
        <input
          type="text"
          name="endDate"
          value={job.endDate}
          placeholder="To"
          onChange={handleChange}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Experience;
