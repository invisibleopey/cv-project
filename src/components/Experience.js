import React from 'react';

function Experience(props) {
  const { job, handleJobChange } = props;
  return (
    <div>
      <h2>Experience</h2>
      <form action="#" className="experience">
        <input
          type="text"
          name="position"
          value={job.position}
          placeholder="Position"
          onChange={handleJobChange}
        />
        <input
          type="text"
          name="company"
          value={job.company}
          placeholder="Company"
          onChange={handleJobChange}
        />
        <input
          type="text"
          name="city"
          value={job.city}
          placeholder="City"
          onChange={handleJobChange}
        />
        <input
          type="text"
          name="startDate"
          value={job.startDate}
          placeholder="From"
          onChange={handleJobChange}
        />
        <input
          type="text"
          name="endDate"
          value={job.endDate}
          placeholder="To"
          onChange={handleJobChange}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Experience;
