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
      firstName: '',
      lastName: '',
      title: '',
      address: '',
      email: '',
      phoneNumber: '',
      description: '',
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
    this.setState({
      [name]: value,
    });
  };

  handleDelete = (event) => {
    const targetId = event.target.parentNode.parentElement.id;
    let deleteTarget;
    // eslint-disable-next-line default-case
    switch (event.target.parentNode.parentElement.className) {
      case 'schools':
        deleteTarget = 'schools';
        break;
      case 'jobs':
        deleteTarget = 'jobs';
        break;
    }
    this.setState({
      [deleteTarget]: this.state[deleteTarget].filter((item) => item.id !== targetId),
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
    const {
      firstName,
      lastName,
      title,
      address,
      email,
      phoneNumber,
      description,
      school,
      schools,
      job,
      jobs,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Resume Regenetor with React</h1>
        </header>
        <main>
          <div className="form-container">
            <GeneralInfo
              firstName={firstName}
              lastName={lastName}
              title={title}
              address={address}
              email={email}
              phoneNumber={phoneNumber}
              description={description}
              handleChange={this.handleChange}
            />
            <Education
              school={school}
              handleChange={this.handleChange}
              handleSchoolSubmit={this.handleSchoolSubmit}
            />
            <Experience
              job={job}
              handleChange={this.handleChange}
              handleJobSubmit={this.handleJobSubmit}
            />
          </div>
          <div className="overview-container">
            <Overview
              firstName={firstName}
              lastName={lastName}
              title={title}
              address={address}
              email={email}
              phoneNumber={phoneNumber}
              description={description}
              schools={schools}
              jobs={jobs}
              handleDelete={this.handleDelete}
              handleSchoolEdit={this.handleSchoolEdit}
              handleJobEdit={this.handleJobEdit}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
