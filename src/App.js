import React, { Component } from 'react';
import GeneralInfo from './components/General-Info';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';
import Overview from './components/Overview';

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
      },
      schools: [],
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
      },
    });
  };

  render() {
    const { genInfo, school, schools } = this.state;
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
            <Experience />
          </div>
          <div className="overview-container">
            <Overview genInfo={genInfo} school={school} schools={schools} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
