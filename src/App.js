import React, { Component } from 'react';
import GeneralInfo from './components/General-Info';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        email: '',
        phoneNumber: '',
        description: '',
      },
      school: {
        name: '',
        city: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
      schools: [],
      job: {
        position: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
      jobs: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        genInfo: {
          ...prevState.genInfo,
          [name]: value,
        },
      };
    });
  };

  handleSchoolChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        school: {
          ...prevState.school,
          [name]: value,
        },
      };
    });
  };

  handleSchoolSubmit = (event) => {
    event.preventDefault();
    this.setState({
      schools: this.state.schools.concat(this.state.school),
      school: {
        name: '',
        city: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    });
  };

  handleSchoolDelete = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    this.setState({
      schools: this.state.schools.filter((school) => school.id !== targetId),
    });
  };

  handleSchoolEdit = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    this.setState((prevState) => {
      const targetSchool = prevState.schools.find((school) => school.id === targetId);
      return {
        school: {
          name: targetSchool.name,
          city: targetSchool.city,
          degree: targetSchool.degree,
          subject: targetSchool.subject,
          startDate: targetSchool.startDate,
          endDate: targetSchool.endDate,
          id: targetSchool.id,
        },
        schools: prevState.schools.filter((school) => school.id !== targetId),
      };
    });
  };

  handleJobChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        job: {
          ...prevState.job,
          [name]: value,
        },
      };
    });
  };

  handleJobSubmit = (event) => {
    event.preventDefault();
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        position: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    });
  };

  handleJobDelete = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    this.setState({
      jobs: this.state.jobs.filter((job) => job.id !== targetId),
    });
  };

  handleJobEdit = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    this.setState((prevState) => {
      const targetJob = prevState.jobs.find((job) => job.id === targetId);
      return {
        job: {
          position: targetJob.position,
          company: targetJob.company,
          city: targetJob.city,
          startDate: targetJob.startDate,
          endDate: targetJob.endDate,
          id: targetJob.id,
        },
        jobs: prevState.jobs.filter((job) => job.id !== targetId),
      };
    });
  };

  render() {
    const { genInfo, school, schools, job, jobs } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Resume Regenetor with React</h1>
        </header>
        <main>
          <div className="form-container">
            <GeneralInfo genInfo={genInfo} handleChange={this.handleChange} />
            <Education
              school={school}
              handleSchoolChange={this.handleSchoolChange}
              handleSchoolSubmit={this.handleSchoolSubmit}
            />
            <Experience
              job={job}
              handleJobChange={this.handleJobChange}
              handleJobSubmit={this.handleJobSubmit}
            />
          </div>
          <div className="overview-container">
            <Overview
              genInfo={genInfo}
              schools={schools}
              handleSchoolDelete={this.handleSchoolDelete}
              handleSchoolEdit={this.handleSchoolEdit}
              jobs={jobs}
              handleJobDelete={this.handleJobDelete}
              handleJobEdit={this.handleJobEdit}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
