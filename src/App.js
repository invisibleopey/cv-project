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
      firstName: '',
      lastName: '',
      title: '',
      address: '',
      email: '',
      phoneNumber: '',
      description: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName, title, address, email, phoneNumber, description } = this.state;
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
            <Education />
            <Experience />
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
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
